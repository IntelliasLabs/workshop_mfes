class EventsBus extends EventTarget {}

export enum EventType {
    Accident = 'Accident',
    ReportAvailable = 'ReportAvailable',
}

export class AccidentEvent extends Event {
  constructor(public message: string, public report: string, public sender: string) {
    super(EventType.Accident);
  }
}

export class NewReportEvent extends Event {
    constructor(public message: string, public report: string, public sender: string) {
      super(EventType.ReportAvailable);
    }
  }
  

export const eventsBus = new EventsBus();



