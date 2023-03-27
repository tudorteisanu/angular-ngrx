export interface CreateAlertInterface {
  title: string;
  message: string;
}

export interface AlertInterface {
  id: number;
  title: string;
  message: string;
}

export interface AlertState {
  items: AlertInterface[]
}
