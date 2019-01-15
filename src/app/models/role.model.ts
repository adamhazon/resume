export interface Role {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
  skills?: string[];
}
