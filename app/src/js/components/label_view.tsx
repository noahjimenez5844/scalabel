import React from 'react';
import Session from '../common/session';
import {LabelType} from '../functional/types';
import {withStyles} from '@material-ui/core/styles/index';
import createStyles from '@material-ui/core/styles/createStyles';

const styles: any = () => createStyles({
  canvas: {
    position: 'relative'
  }
});

interface Props {
  /** image height */
  height: number;
  /** image width */
  width: number;
  /** image view z-index */
  zIndex: number;
}

/**
 * Canvas Viewer
 */
class LabelView extends React.Component<Props> {
  /** Canvas */
  private canvas: any;
  /** Canvas height */
  private canvasHeight: number;
  /** Canvas width */
  private canvasWidth: number;
  /** Context */
  public context: any;
  /** canvas z-index  */
  private zIndex: number;

  /**
   * Constructor, handles subscription to store
   * @param {Object} props: react props
   */
  constructor(props: Readonly<Props>) {
    super(props);
    this.canvasHeight = props.height;
    this.canvasWidth = props.width;
    this.zIndex = props.zIndex;
  }

  /**
   * Render function
   * @return {React.Fragment} React fragment
   */
  public render() {
    return (<canvas className={this.canvas} ref={(canvas) => {
      if (canvas) {
        this.context = canvas.getContext('2d');
        this.canvas = canvas;
        this.canvas.height = this.canvasHeight;
        this.canvas.width = this.canvasWidth;
        this.canvas.style.position = 'absolute';
        this.canvas.style.zIndex = this.zIndex;
        this.redraw();
      }
    }}/>);
  }

  /**
   * Execute when component state is updated
   */
  public componentDidUpdate() {
    this.redraw();
  }

  /**
   * Handles canvas redraw
   * @return {boolean}
   */
  public redraw(): boolean {
    const state = Session.getState();
    const item = state.current.item;
    const loaded = state.items[item].loaded;
    const labels = Session.getState().labels;
    if (loaded) {
      // draw stuff
      this.context.font = "15px Courier";
      this.context.fillStyle = "red";
      for (const key in labels) {
        if (labels.hasOwnProperty(key)) {
          const labelType: LabelType  = labels[key];
          let i = 0;
          const attributes = labelType.attributes;
          for (const attrKeyIndex in attributes) {
            if (attributes.hasOwnProperty(attrKeyIndex)) {
              const attributeConfig = state.config.attributes;
              const attrName = attributeConfig[attrKeyIndex]['name'];
              const attrValues = attributeConfig[attrKeyIndex]['values'];
              const attrValueIndexes = attributes[attrKeyIndex];
              const valueString = attrValueIndexes.map(
                index => attrValues[index]).join(',');
              this.context.fillText(
                attrName + ':' + valueString, 10, i * 20 + 30);
              i += 1;
            }
          }
      }
     }
    }
    return true;
  }
}

export default withStyles(styles, {withTheme: true})(LabelView);
