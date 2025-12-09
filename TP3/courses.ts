
abstract class Course {
  protected title: string;

  constructor(title: string) {
    this.title = title;
  }

  
  abstract getDescription(): string;

  getTitle(): string {
    return this.title;
  }
}

class VideoCourse extends Course {
  private duration: number; 

  constructor(title: string, duration: number) {
    super(title);
    this.duration = duration;
  }

  getDescription(): string {
    return `Cours vidéo: ${this.title} - Durée: ${this.duration} minutes`;
  }

  getDuration(): number {
    return this.duration;
  }
}

class LiveCourse extends Course {
  private date: Date;

  constructor(title: string, date: Date) {
    super(title);
    this.date = date;
  }

  getDescription(): string {
    return `Cours en direct: ${this.title} - Date: ${this.date.toLocaleDateString('fr-FR')} à ${this.date.toLocaleTimeString('fr-FR')}`;
  }

  getDate(): Date {
    return this.date;
  }
}

export { Course, VideoCourse, LiveCourse };

