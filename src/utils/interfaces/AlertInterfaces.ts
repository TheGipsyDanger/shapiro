export interface IAlertCtx {
  title: string;
  message: string;
  type: string;
}

export interface IAlertContext {
  isShow: boolean;
  setIsShow(isShow: boolean): void;
  alertCtx: IAlertCtx;
  showAlert(ctx: IAlertCtx): void;
}
