export type IModalNames = 'default' | 'ModalQuestion';

export type IFunctions = Array<(params?: any) => any>;
export interface IModalContext {
  modalName: string;
  modalIsOpen: boolean;
  functions: IFunctions;
  closeModal(): void;
  openModal(name: IModalNames): void;
  defineFunctions(functions: IFunctions): void;
}
