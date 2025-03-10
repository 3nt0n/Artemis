import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCheck, faEye, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ExamLiveEvent, ExamLiveEventType, ExamWideAnnouncementEvent, WorkingTimeUpdateEvent } from 'app/exam/participate/exam-participation-live-events.service';

@Component({
    selector: 'jhi-exam-live-event',
    templateUrl: './exam-live-event.component.html',
    styleUrls: ['./exam-live-event.component.scss'],
})
export class ExamLiveEventComponent {
    @Input()
    event: ExamLiveEvent;

    @Input()
    showAcknowledge: boolean = false;

    @Output()
    onAcknowledge = new EventEmitter<ExamLiveEvent>();

    protected readonly ExamLiveEventType = ExamLiveEventType;

    // Icons
    faCheck = faCheck;
    faPaperPlane = faPaperPlane;
    faEye = faEye;

    eventAsExamWideAnnouncementEvent(): ExamWideAnnouncementEvent {
        return this.event as ExamWideAnnouncementEvent;
    }

    eventAsWorkingTimeUpdateEvent(): WorkingTimeUpdateEvent {
        return this.event as WorkingTimeUpdateEvent;
    }

    acknowledgeEvent() {
        this.onAcknowledge.emit(this.event);
    }
}
