export interface Event {
  category: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  learnMoreUrl: string;
  registerUrl: string;
}

export interface NewsletterData {
  title: string;
  date: string;
  greeting: string;
  introduction: string;
  events: Event[];
  closingMessage: string;
  senderName: string;
}
