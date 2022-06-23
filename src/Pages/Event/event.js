import React, { useState } from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop
} from "@syncfusion/ej2-react-schedule";
import "./event.css";
import { EventData} from "../../App/shared/EventData";


const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Scheduler = () => {
  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    scheduleObj.EventData = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };


  // const CourseInstactor: Object[]= [
  //   {
  //     Name: 'Colina',
  //     Id: 1,
  //     Color: "#ea7a57"
  //   },
  //   {
  //     Name: 'Bereka',
  //     Id: 2,
  //     Color: "#357CD2"
  //   },
  //   {
  //     Name: 'Sera',
  //     Id: 3,
  //     Color: "#084CFB"
  //   },
  //   {
  //     Name: 'Bonica',
  //     Id: 4,
  //     Color: "#ADF3FD"
  //   },
  //   {
  //     Name: 'Abader',
  //     Id: 5,
  //     Color: "#00898a"
  //   },
  //   {
  //     Name: 'Dayln',
  //     Id: 6,
  //     Color: "#2a4858"
  //   },
  // ]
//  console.log(CourseInstactor)
  return (
    <div className="" id="calenderBg">
      <ScheduleComponent
        height="650px"
        currentView="Month"
        ref={(schedule) => setScheduleObj(schedule)}
        selectedDate={new Date(2022, 5, 20)}
        eventSettings={{ dataSource: EventData }}
        dragStart={onDragStart}
      >
        <ViewsDirective>
          {["Day", "Week", "WorkWeek", "Month", "Agenda"].map((item) => (
            <ViewDirective key={item} option={item} />
          ))}
        </ViewsDirective>
        
        {/* <ResourcesDirective>
          <ResourceDirective field="ResourceID" title="Resource Name" name="Resources" textField="Name" id='Id' colorField="Color" dataSource={{Object: CourseInstactor}}></ResourceDirective>
        </ResourcesDirective> */}

        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Scheduler;
