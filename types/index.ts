export interface Step {
    name: string;
    description: string;
    fieldType: 'TYPE_NONE';
  }
  
  export interface Workflow {
    id: string;
    name: string;
    description: string;
    createdBy: string;
    steps: Step[];
  }
  