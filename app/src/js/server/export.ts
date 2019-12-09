import { AttributeToolType, LabelTypeName } from '../common/types'
import { ItemExport, LabelExport } from '../functional/bdd_types'
import {
  Attribute, Category, ConfigType,
  CubeType, ItemType, PolygonType, RectType, State
} from '../functional/types'

/**
 * converts single item to exportable format
 * @param config
 * @param item
 */
export function convertItemToExport (config: ConfigType,
                                     item: ItemType): ItemExport {
  const itemExport: ItemExport = {
    ...defaultItemExport,
    name: item.url,
    url: item.url,
    videoName: item.videoName,
    // Don't index relative to task index, but rather from 0 to numItems
    index: item.id
  }
  // TODO: remove after fixing timestamps
  // tslint:disable-next-line: strict-type-predicates
  if (item.timestamp !== undefined) {
    itemExport.timestamp = item.timestamp
  }
  const labelExports: LabelExport[] = []
  Object.entries(item.labels).forEach(([_, label]) => {
    const labelExport: LabelExport = {
      id: label.id,
      category: parseLabelCategory(label.category, config.categories),
      attributes: parseLabelAttributes(label.attributes, config.attributes),
      manualShape: label.manual,
      box2d: null,
      poly2d: null,
      box3d: null
    }
    // TODO: fix this to loop over all labels shapes
    // right now it just exports the first one
    if (label.shapes.length > 0) {
      const shapeId = label.shapes[0]
      const indexedShape = item.shapes[shapeId]
      switch (label.type) {
        case LabelTypeName.BOX_2D:
          const box2d = indexedShape.shape as RectType
          labelExport.box2d = box2d
          break
        case LabelTypeName.POLYGON_2D:
          const poly2d = indexedShape.shape as PolygonType
          labelExport.poly2d = poly2d
          break
        case LabelTypeName.BOX_3D:
          const poly3d = indexedShape.shape as CubeType
          labelExport.box3d = poly3d
          break
      }
    }
    labelExports.push(labelExport)
  })
  itemExport.labels = labelExports
  return itemExport
}

/**
 * parses attributes into BDD format
 * @param attributes
 */
function parseLabelAttributes (labelAttributes: { [key: number]: number[] },
                               configAttributes: Attribute[]):
                              { [key: string]: (string[] | boolean) } {
  const exportAttributes: { [key: string]: (string[] | boolean) } = {}
  Object.entries(labelAttributes).forEach(([key, attributeList]) => {
    const index = parseInt(key, 10)
    const attribute = configAttributes[index]
    if (attribute.toolType === AttributeToolType.LIST
      || attribute.toolType === AttributeToolType.LONG_LIST) {
      // list attribute case- check whether each value is applied
      const selectedValues: string[] = []
      attributeList.forEach((valueIndex) => {
        if (valueIndex in attribute.values) {
          selectedValues.push(attribute.values[valueIndex])
        }
      })
      exportAttributes[attribute.name] = selectedValues
    } else if (attribute.toolType === AttributeToolType.SWITCH) {
      // boolean attribute case- should be a single boolean in the list
      let value = false
      if (attributeList.length > 0) {
        const attributeVal = attributeList[0]
        if (attributeVal === 1) {
          value = true
        }
      }
      exportAttributes[attribute.name] = value
    }

  })
  return exportAttributes
}

/**
 * converts category as a list of category IDs (indexes) to a list of strings,
 * where each element reperesents the selected category at a given depth of the
 * general categories tree
 * @param configCategories
 * @param labelCategoryIDs
 */
function parseLabelCategory (labelCategoryIDs: number[],
                             configCategories: Category[]): string[] {
  const selectedCategory: string[] = []
  let currentCategories = configCategories
  for (const categoryID of labelCategoryIDs) {
    selectedCategory.push(currentCategories[categoryID].name)
    currentCategories = currentCategories[categoryID].subcategories
  }
  return selectedCategory
}

/**
 * converts state to export format
 * @param state
 */
export function convertStateToExport (state: State)
  : ItemExport[] {
  const config = state.task.config
  const items = state.task.items
  const exportList: ItemExport[] = []
  items.forEach((item) => {
    exportList.push(convertItemToExport(config, item))
  })
  return exportList
}

const defaultItemExport = {
  name: '',
  url: '',
  videoName: '',
  attributes: {},
  timestamp: -1,
  index: -1,
  labels: []
}
