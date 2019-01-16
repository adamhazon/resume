export interface Role {
  id?: number;
  position: string;
  company: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
  skills?: string[];
}
