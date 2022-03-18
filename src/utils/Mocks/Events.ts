const events = [
  {
    id: '1',
    name: 'Lily James 1',
    initial: '12:30',
    final: '13:00',
    images: [
      'https://universomovieforward.files.wordpress.com/2018/05/lofficiel-netherlands-lily-james-buzz-white-1.jpg',
      'https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2020/10/19/lily-james.jpg',
      'https://universomovieforward.files.wordpress.com/2018/05/lofficiel-netherlands-lily-james-buzz-white-1.jpg',
    ],
  },
  {
    id: '2',
    name: 'Lana del rey',
    initial: '11:00',
    final: '12:00',
    images: [
      'https://yt3.ggpht.com/a/AGF-l7-6TZuW4CKfXn5uEedtJGh1tRjAOMAZUnze5w=s900-c-k-c0xffffffff-no-rj-mo',
      'https://www.midiorama.com/wp-content/uploads/2020/11/del-rey-reproducao-insta-920x625.jpg',
      'https://cdn-kboing-images.akamaized.net/f_noticias/5/d/4/5d49b7d3b5f49.jpg',
      'https://s2.glbimg.com/ZPNTRhDvnT9HjrIoKcclIBTSv80=/smart/e.glbimg.com/og/ed/f/original/2015/01/11/461352184_1.jpg',
      'https://rollingstone.uol.com.br/media/_versions/lana_del_rey_-_robb_cohen-invision-ap_-_pequena_widelg.jpg',
    ],
  },
  {
    id: '3',
    name: 'Lily James 3',
    initial: '16:00',
    final: '16:30',
    images: [],
  },
  {
    id: '4',
    name: 'Lily James 4',
    initial: '17:30',
    final: '18:00',
    images: [
      'https://universomovieforward.files.wordpress.com/2018/05/lofficiel-netherlands-lily-james-buzz-white-1.jpg',
      'https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2020/10/19/lily-james.jpg',
    ],
  },
  {
    id: '5',
    name: 'Lily James 5',
    initial: '18:30',
    final: '19:00',
    images: [
      'https://universomovieforward.files.wordpress.com/2018/05/lofficiel-netherlands-lily-james-buzz-white-1.jpg',
      'https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2020/10/19/lily-james.jpg',
    ],
  },
  {
    id: '6',
    name: 'Lily James 6',
    initial: '19:30',
    final: '20:00',
    images: [
      'https://universomovieforward.files.wordpress.com/2018/05/lofficiel-netherlands-lily-james-buzz-white-1.jpg',
      'https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2020/10/19/lily-james.jpg',
    ],
  },
];

export const mockDaysData = {
  monday: { events: [] },
  tuesday: { events: [] },
  wednesday: { events: [] },
  thursday: { events: [...events] },
  friday: { events: [] },
  saturday: { events: [] },
  sunday: { events: [] },
};

export const mockDaysDataEmpty = {
  monday: { events: [] },
  tuesday: { events: [] },
  wednesday: { events: [] },
  thursday: { events: [] },
  friday: { events: [] },
  saturday: { events: [] },
  sunday: { events: [] },
};
