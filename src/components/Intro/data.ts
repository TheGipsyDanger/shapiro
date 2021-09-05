export interface IIntro {
  onTutorialDone(): void;
}

export interface IIntroLayout extends IIntro {
  data: ISlide[];
}

export interface IItem {
  item: ISlide;
}

export interface ISlide {
  key: string;
  title: string;
  text: string;
  image: HTMLImageElement;
}

export interface IButtonSlide {
  id: string;
  label: string;
  onPress(): void;
}

export const componentData = {
  SLIDES: [
    {
      key: 'step1',
      title: 'welcome',
      text: 'shapiro is a simple way to organize\nyour school lesson photos',
      image: require('../../assets/logo/white.png'),
    },
    {
      key: 'step2',
      title: 'events',
      text:
        "choose a day and select a time and that's it!\nyour event is created",
      image: require('../../assets/step2.png'),
    },
    {
      key: 'step3',
      title: 'take photos',
      text:
        'shapiro indicates the current event,\njust take photos and they\nwill be organized',
      image: require('../../assets/step3.png'),
    },
    {
      key: 'step4',
      title: 'organized',
      text: 'view your photos easily and organized\nby events',
      image: require('../../assets/step4.png'),
    },
    {
      key: 'step5',
      title: 'share',
      text: 'share your photos on the most\ndiverse platforms',
      image: require('../../assets/step5.png'),
    },
  ],
};
