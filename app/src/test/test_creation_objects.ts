import { AttributeToolType, BundleFile,
  HandlerUrl, ItemTypeName, LabelTypeName } from '../js/common/types'
import { ItemExport } from '../js/functional/bdd_types'
import { Attribute, Category, TaskType } from '../js/functional/types'
import { CreationForm, defaultBoxCategories, FormFileData, Project } from '../js/server/types'
import { sampleStateExportImage } from './test_export_objects'

const sampleCategories: Category[] = defaultBoxCategories

const sampleMultiLevelCategories: Category[] = [
  { name: 'person', subcategories: [] },
  { name: 'rider', subcategories: [
    { name: 'rider0', subcategories: [] },
    {name: 'rider1', subcategories: [
      { name: 'rider10', subcategories: [] }
    ]}
  ] },
  { name: 'car', subcategories: [] },
  { name: 'truck', subcategories: [] },
  { name: 'bus', subcategories: [] },
  { name: 'train', subcategories: [] },
  { name: 'motor', subcategories: [] },
  { name: 'bike', subcategories: [
    { name: 'bike0', subcategories: [] }
  ] },
  { name: 'traffic sign', subcategories: [] },
  { name: 'traffic light', subcategories: [] }
]

const sampleAttributes: Array<Partial<Attribute>> = [
  {
    name: 'Occluded',
    toolType: AttributeToolType.SWITCH,
    tagText: 'o'
  },
  {
    name: 'Truncated',
    toolType: AttributeToolType.SWITCH,
    tagText: 't'
  },
  {
    name: 'Traffic Light Color',
    toolType: AttributeToolType.LIST,
    tagPrefix: 't',
    tagSuffixes: [
      '',
      'g',
      'y',
      'r'
    ],
    values: [
      'NA',
      'G',
      'Y',
      'R'
    ],
    buttonColors: [
      'white',
      'green',
      'yellow',
      'red'
    ]
  }
]

export const sampleItems: Array<Partial<ItemExport>> = [
  {
    name: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000102.jpg',
    url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000102.jpg',
    videoName: 'a',
    timestamp: 1568928550,
    index: 1
  },
  {
    name: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000103.jpg',
    url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000103.jpg',
    videoName: 'a',
    timestamp: 1568928550,
    index: 2
  },
  {
    name: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000104.jpg',
    url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000104.jpg',
    videoName: 'a',
    timestamp: 1568928550,
    index: 3
  },
  {
    name: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000105.jpg',
    url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000105.jpg',
    videoName: 'b',
    timestamp: 1568928550,
    index: 4
  },
  {
    name: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000106.jpg',
    url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000106.jpg',
    videoName: 'b',
    timestamp: 10000,
    index: 5
  },
  {
    name: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000107.jpg',
    url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000107.jpg',
    videoName: 'b',
    timestamp: 10000,
    index: 6
  },
  {
    name: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000108.jpg',
    url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000108.jpg',
    videoName: 'b',
    timestamp: 10000,
    index: 7
  },
  {
    name: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000109.jpg',
    url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000109.jpg',
    videoName: 'b',
    timestamp: 10000,
    index: 8
  },
  {
    name: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000110.jpg',
    url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000110.jpg',
    videoName: 'b',
    timestamp: 10000,
    index: 9
  },
  {
    name: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000111.jpg',
    url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000111.jpg',
    videoName: 'b',
    timestamp: 10000,
    index: 10
  }
]

export const sampleFormEmpty: CreationForm = {
  projectName: '',
  itemType: '',
  labelType: '',
  pageTitle: '',
  taskSize: 0,
  instructions: '',
  demoMode: false
}

const sampleProjectName = 'sampleName'
const sampleInstructions = 'instructions.com'
const sampleTitle = 'sampleTitle'
const sampleTaskSize = 5

export const sampleFormImage: CreationForm = {
  projectName: sampleProjectName,
  itemType: ItemTypeName.IMAGE,
  labelType: LabelTypeName.BOX_2D,
  pageTitle: sampleTitle,
  taskSize: sampleTaskSize,
  instructions: sampleInstructions,
  demoMode: false
}

export const sampleFormVideo: CreationForm = {
  projectName: sampleProjectName,
  itemType: ItemTypeName.VIDEO,
  labelType: LabelTypeName.POLYGON_2D,
  pageTitle: sampleTitle,
  taskSize: sampleTaskSize,
  instructions: sampleInstructions,
  demoMode: false
}

export const sampleFormFileData: FormFileData = {
  categories: sampleCategories,
  attributes: sampleAttributes as Attribute[],
  items: sampleItems
}

export const sampleMultiLevelCategoryFormFileData: FormFileData = {
  categories: sampleMultiLevelCategories,
  attributes: sampleAttributes as Attribute[],
  items: sampleItems
}

export const sampleProjectImage: Project = {
  items: sampleItems,
  config: {
    projectName: sampleProjectName,
    itemType: ItemTypeName.IMAGE,
    labelTypes: [LabelTypeName.BOX_2D],
    policyTypes: [],
    taskSize: sampleTaskSize,
    tracking: false,
    handlerUrl: HandlerUrl.LABEL,
    pageTitle: sampleTitle,
    instructionPage: sampleInstructions,
    bundleFile: BundleFile.V2,
    categories: sampleCategories,
    attributes: sampleAttributes as Attribute[],
    taskId: '',
    submitTime: -1,
    demoMode: false,
    submitted: false,
    autosave: true
  }
}

export const sampleProjectVideo: Project = {
  items: sampleItems,
  config: {
    projectName: sampleProjectName,
    itemType: ItemTypeName.IMAGE,
    labelTypes: [LabelTypeName.POLYGON_2D],
    policyTypes: [],
    taskSize: sampleTaskSize,
    tracking: true,
    handlerUrl: HandlerUrl.INVALID,
    pageTitle: sampleTitle,
    instructionPage: sampleInstructions,
    bundleFile: BundleFile.V1,
    categories: sampleCategories,
    attributes: sampleAttributes as Attribute[],
    taskId: '',
    submitTime: -1,
    demoMode: false,
    submitted: false,
    autosave: true
  }
}

export const sampleMultilevelCategoryProjectImage: Project = {
  items: sampleItems,
  config: {
    projectName: sampleProjectName,
    itemType: ItemTypeName.IMAGE,
    labelTypes: [LabelTypeName.BOX_2D],
    policyTypes: [],
    taskSize: sampleTaskSize,
    tracking: false,
    handlerUrl: HandlerUrl.LABEL,
    pageTitle: sampleTitle,
    instructionPage: sampleInstructions,
    bundleFile: BundleFile.V2,
    categories: sampleMultiLevelCategories,
    attributes: sampleAttributes as Attribute[],
    taskId: '',
    submitTime: -1,
    demoMode: false,
    submitted: false,
    autosave: true
  }
}

export const sampleProjectAutolabel: Project = {
  items: sampleStateExportImage,
  config: {
    projectName: sampleProjectName,
    itemType: ItemTypeName.IMAGE,
    labelTypes: [LabelTypeName.BOX_2D],
    policyTypes: [],
    taskSize: sampleTaskSize,
    tracking: false,
    handlerUrl: HandlerUrl.LABEL,
    pageTitle: sampleTitle,
    instructionPage: sampleInstructions,
    bundleFile: BundleFile.V2,
    categories: sampleCategories,
    attributes: sampleAttributes as Attribute[],
    taskId: '',
    submitTime: -1,
    demoMode: false,
    submitted: false,
    autosave: true
  }
}

export const sampleTasksImage: TaskType[] = [
  {
    config: {
      projectName: sampleProjectName,
      itemType: ItemTypeName.IMAGE,
      labelTypes: [LabelTypeName.BOX_2D],
      policyTypes: [],
      taskSize: sampleTaskSize,
      tracking: false,
      handlerUrl: HandlerUrl.LABEL,
      pageTitle: sampleTitle,
      instructionPage: sampleInstructions,
      bundleFile: BundleFile.V2,
      categories: sampleCategories,
      attributes: sampleAttributes as Attribute[],
      taskId: '000000',
      submitTime: -1,
      demoMode: false,
      submitted: false,
      autosave: true
    },
    status: {
      maxLabelId: -1,
      maxShapeId: -1,
      maxOrder: 0,
      maxTrackId: -1
    },
    items: [
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000102.jpg',
        index: 0,
        id: 0,
        labels: {},
        shapes: {},
        timestamp: 1568928550,
        videoName: 'a'
      },
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000103.jpg',
        index: 1,
        id: 1,
        labels: {},
        shapes: {},
        timestamp: 1568928550,
        videoName: 'a'
      },
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000104.jpg',
        index: 2,
        id: 2,
        labels: {},
        shapes: {},
        timestamp: 1568928550,
        videoName: 'a'
      },
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000105.jpg',
        index: 3,
        id: 3,
        labels: {},
        shapes: {},
        timestamp: 1568928550,
        videoName: 'b'
      },
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000106.jpg',
        index: 4,
        id: 4,
        labels: {},
        shapes: {},
        timestamp: 10000,
        videoName: 'b'
      }
    ],
    tracks: {}
  },
  {
    config: {
      projectName: sampleProjectName,
      itemType: ItemTypeName.IMAGE,
      labelTypes: [LabelTypeName.BOX_2D],
      policyTypes: [],
      taskSize: sampleTaskSize,
      tracking: false,
      handlerUrl: HandlerUrl.LABEL,
      pageTitle: sampleTitle,
      instructionPage: sampleInstructions,
      bundleFile: BundleFile.V2,
      categories: sampleCategories,
      attributes: sampleAttributes as Attribute[],
      taskId: '000001',
      submitTime: -1,
      demoMode: false,
      submitted: false,
      autosave: true
    },
    status: {
      maxLabelId: -1,
      maxShapeId: -1,
      maxOrder: 0,
      maxTrackId: -1
    },
    items: [
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000107.jpg',
        index: 0,
        id: 5,
        labels: {},
        shapes: {},
        timestamp: 10000,
        videoName: 'b'
      },
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000108.jpg',
        index: 1,
        id: 6,
        labels: {},
        shapes: {},
        timestamp: 10000,
        videoName: 'b'
      },
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000109.jpg',
        index: 2,
        id: 7,
        labels: {},
        shapes: {},
        timestamp: 10000,
        videoName: 'b'
      },
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000110.jpg',
        index: 3,
        id: 8,
        labels: {},
        shapes: {},
        timestamp: 10000,
        videoName: 'b'
      },
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000111.jpg',
        index: 4,
        id: 9,
        labels: {},
        shapes: {},
        timestamp: 10000,
        videoName: 'b'
      }
    ],
    tracks: {}
  }
]

export const sampleTasksVideo: TaskType[] = [
  {
    config: {
      projectName: sampleProjectName,
      itemType: ItemTypeName.IMAGE,
      labelTypes: [LabelTypeName.POLYGON_2D],
      policyTypes: [],
      taskSize: 3,
      tracking: true,
      handlerUrl: HandlerUrl.INVALID,
      pageTitle: sampleTitle,
      instructionPage: sampleInstructions,
      bundleFile: BundleFile.V1,
      categories: sampleCategories,
      attributes: sampleAttributes as Attribute[],
      taskId: '000000',
      submitTime: -1,
      demoMode: true,
      submitted: false,
      autosave: true
    },
    status: {
      maxLabelId: -1,
      maxShapeId: -1,
      maxOrder: 0,
      maxTrackId: -1
    },
    items: [
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000102.jpg',
        index: 0,
        id: 0,
        labels: {},
        shapes: {},
        timestamp: 1568928550,
        videoName: 'a'
      },
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000103.jpg',
        index: 1,
        id: 1,
        labels: {},
        shapes: {},
        timestamp: 1568928550,
        videoName: 'a'
      },
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000104.jpg',
        index: 2,
        id: 2,
        labels: {},
        shapes: {},
        timestamp: 1568928550,
        videoName: 'a'
      }
    ],
    tracks: {}
  },
  {
    config: {
      projectName: sampleProjectName,
      itemType: ItemTypeName.IMAGE,
      labelTypes: [LabelTypeName.POLYGON_2D],
      policyTypes: [],
      taskSize: 7,
      tracking: true,
      handlerUrl: HandlerUrl.INVALID,
      pageTitle: sampleTitle,
      instructionPage: sampleInstructions,
      bundleFile: BundleFile.V1,
      categories: sampleCategories,
      attributes: sampleAttributes as Attribute[],
      taskId: '000001',
      submitTime: -1,
      demoMode: true,
      submitted: false,
      autosave: true
    },
    status: {
      maxLabelId: -1,
      maxShapeId: -1,
      maxOrder: 0,
      maxTrackId: -1
    },
    items: [
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000105.jpg',
        index: 0,
        id: 3,
        labels: {},
        shapes: {},
        timestamp: 1568928550,
        videoName: 'b'
      },
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000106.jpg',
        index: 1,
        id: 4,
        labels: {},
        shapes: {},
        timestamp: 10000,
        videoName: 'b'
      },
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000107.jpg',
        index: 2,
        id: 5,
        labels: {},
        shapes: {},
        timestamp: 10000,
        videoName: 'b'
      },
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000108.jpg',
        index: 3,
        id: 6,
        labels: {},
        shapes: {},
        timestamp: 10000,
        videoName: 'b'
      },
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000109.jpg',
        index: 4,
        id: 7,
        labels: {},
        shapes: {},
        timestamp: 10000,
        videoName: 'b'
      },
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000110.jpg',
        index: 5,
        id: 8,
        labels: {},
        shapes: {},
        timestamp: 10000,
        videoName: 'b'
      },
      {
        url: 'https://s3-us-west-2.amazonaws.com/scalabel-public/demo/frames/intersection-0000111.jpg',
        index: 6,
        id: 9,
        labels: {},
        shapes: {},
        timestamp: 10000,
        videoName: 'b'
      }
    ],
    tracks: {}
  }
]
