import { SnackbarProvider, enqueueSnackbar } from 'notistack'
import { AccidentEvent, EventType, NewReportEvent, eventsBus } from 'lib';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    const subscriptionToAccidents = (report: Event) => {
      if(report instanceof AccidentEvent) {
        enqueueSnackbar(`Accident Happened! Details: ${report.report}. Sender: ${report.sender}`, { variant: 'error', autoHideDuration: 5000, style: {fontSize: 24} });
      }
    }

    const subscriptionToReports = (report: Event) => {
      console.log(report);
      if(report instanceof NewReportEvent) {
        enqueueSnackbar(`New Report Available! Details: ${report.report}. Sender: ${report.sender}`, { variant: 'info', autoHideDuration: 5000, style: {fontSize: 24} });
      }
    }

    eventsBus.addEventListener(EventType.Accident, subscriptionToAccidents);
    eventsBus.addEventListener(EventType.ReportAvailable, subscriptionToReports);
    return () => {
      eventsBus.removeEventListener(EventType.Accident, subscriptionToAccidents);
      eventsBus.removeEventListener(EventType.ReportAvailable, subscriptionToReports);
    };
  }, [])
  return (
    <div>
      <SnackbarProvider autoHideDuration={10000} maxSnack={10} />
    </div>
  );
}

export default App;
