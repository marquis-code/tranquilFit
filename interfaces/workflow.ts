// interfaces/IWorkflow.ts
export interface Step {
    id: string;
    name: string;
    description: string;
    fieldType: "TYPE_NONE";
  }
  
  export interface Workflow {
    id: string;
    name: string;
    description: string;
    steps: Step[];
  }
  