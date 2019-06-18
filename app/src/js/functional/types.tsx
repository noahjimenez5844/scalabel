export interface LabelType {
  /** ID of the label */
  id: number;
  /** The item ID */
  item: number;
  /** The category ID */
  category: number[];
  /** Attributes */
  attributes: {[key: number]: number[]};
  /** Parent label ID */
  parent: number;
  /** Children label IDs */
  children: number[];
  /** Whether or not the label is valid */
  valid: boolean;
  /** Shapes of the label */
  shapes: number[];
  /** Selected shape of the label */
  selectedShape: number;
  /** State */
  state: number;
}

export interface ShapeType {
  /** ID of the shape */
  id: number;
  /** Label ID of the shape */
  label: number;
}

export interface RectType extends ShapeType {
  /** The x-coordinate */
  x: number;
  /** The y-coordinate */
  y: number;
  /** Width */
  w: number;
  /** Height */
  h: number;
}

export interface Vector3Type {
  /** The x-coordinate */
  x: number;
  /** The y-coordinate */
  y: number;
  /** The z-coordinate */
  z: number;
}

export interface CubeType extends ShapeType {
  /** Center of the cube */
  center: Vector3Type;
  /** size */
  size: Vector3Type;
  /** orientation */
  orientation: Vector3Type;
}

export interface ImageViewerConfigType {
  /** The width of the image */
  imageWidth: number;
  /** The height of the image */
  imageHeight: number;
  /** View scale */
  viewScale: number;
}

export interface PointCloudViewerConfigType {
  /** Camera position */
  position: Vector3Type;
  /** Viewing direction */
  target: Vector3Type;
  /** Up direction of the camera */
  verticalAxis: Vector3Type;
}

export type ViewerConfigType =
    ImageViewerConfigType | PointCloudViewerConfigType;

export interface ItemType {
  /** The ID of the item */
  id: number;
  /** The index of the item */
  index: number;
  /** The URL of the item */
  url: string;
  /** Whether or not the item is active */
  active: boolean;
  /** Whether or not the item is loaded */
  loaded: boolean;
  /** Labels of the item */
  labels: number[]; // list of label ids
  /** Configurations of the viewer */
  viewerConfig: ViewerConfigType;
}

/*
  Those properties are not changed during the lifetime of a session.
  It also make SatProps smaller. When in doubt; put the props in config in favor
  of smaller SatProps.
 */
export interface ConfigType {
  /** Assignment ID */
  assignmentId: string;
  /** Project name */
  projectName: string;
  /** Item type */
  itemType: string;
  /** Label type */
  labelType: string;
  /** Task size */
  taskSize: number;
  /** Handler URL */
  handlerUrl: string;
  /** Page title */
  pageTitle: string;
  /** Instruction page URL */
  instructionPage: string;
  /** Whether or not in demo mode */
  demoMode: boolean;
  /** Bundle file */
  bundleFile: string;
  /** Categories */
  categories: string[];
  /** Attributes */
  attributes: object[];
  /** Task ID */
  taskId: string;
  /** Worker ID */
  workerId: string;
  /** Start time */
  startTime: number;
}

export interface LayoutType {
  /** Width of the tool bar */
  toolbarWidth: number;
  /** Whether or not to show the assistant view */
  assistantView: boolean;
  /** Assistant view ratio */
  assistantViewRatio: number;
}

/*
  The current state of Sat.
 */
export interface CurrentType {
  /** Currently viewed item ID */
  item: number;
  /** Currently selected label ID */
  label: number;
  /** Currently selected shape ID */
  shape: number;
  /** Max object ID */
  maxObjectId: number;
}

export interface StateType {
  /** Configurations */
  config: ConfigType;
  /** The current state */
  current: CurrentType;
  /** Items */
  items: ItemType[];
  /** Labels */
  labels: {[key: number]: LabelType}; // Map from label id string to label
  /** tracks */
  tracks: {[key: number]: LabelType};
  /** shapes */
  shapes: {[key: number]: any};
  /** Actions */
  actions: any[];
  /** Layout */
  layout: LayoutType;
}

export type LabelFunctionalType =
    (id: number, itemId: number, attributes: object) => LabelType;

export type ItemFunctionalType = (id: number, url: string) => ItemType;
