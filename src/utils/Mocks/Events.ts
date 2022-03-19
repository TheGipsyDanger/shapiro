const events = [
  {
    id: '1',
    name: 'Math lessons',
    initial: '12:30',
    final: '13:00',
    images: [
      'https://bryantarchway.com/wp-content/uploads/2016/10/math.jpg',
      'https://media.wired.com/photos/593235d89be5e55af6c2388b/master/pass/GettyImages-174715765.jpg',
      'https://online.une.edu/wp-content/uploads/2016/05/physics-online-course-1.jpg',
      'https://media.wired.com/photos/593235d89be5e55af6c2388b/master/pass/GettyImages-174715765.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu2eMpZAVkC5Gv13oyms-T7Nv_qCWyFcxpJKvGv4ylOo_2uO0l0kM8BOGKbKlFjoLUkLw&usqp=CAU',
    ],
  },
  {
    id: '2',
    name: 'Fisics',
    initial: '11:00',
    final: '12:00',
    images: [
      'https://media.wired.com/photos/593235d89be5e55af6c2388b/master/pass/GettyImages-174715765.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu2eMpZAVkC5Gv13oyms-T7Nv_qCWyFcxpJKvGv4ylOo_2uO0l0kM8BOGKbKlFjoLUkLw&usqp=CAU',
      'https://media.wired.com/photos/593235d89be5e55af6c2388b/master/pass/GettyImages-174715765.jpg',
      'https://online.une.edu/wp-content/uploads/2016/05/physics-online-course-1.jpg',
      'https://bryantarchway.com/wp-content/uploads/2016/10/math.jpg',
    ],
  },
  {
    id: '5',
    name: 'Greta van fleet - Show',
    initial: '21:30',
    final: '22:30',
    images: [
      'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2019/04/greta-rj27.jpeg',
      'https://ogimg.infoglobo.com.br/in/23578676-f94-54f/FT1086A/Greta-Van-Fleet.jpg',
      'https://imageio.forbes.com/specials-images/imageserve/607b6e4d6a1228305e1c5b3d/Greta-Van-Fleet-Concert-In-Barcelona/960x0.jpg?fit=bounds&format=jpg&width=960',
      'https://www.billboard.com/wp-content/uploads/media/greta-van-fleet-live-july-2018-billboard-1548.jpg?w=1024',
      'https://www.atlantamusicguide.com/wp-content/uploads/Greta-Van-Fleet-62.jpg',
      'https://www.mlive.com/resizer/5g64l2jf9GVbTMSPlxmnZwRVmG0=/1280x0/smart/image.mlive.com/home/mlive-media/width600/img/music_impact/photo/greta-van-fleet-c56bda3d9240686d.jpg',
    ],
  },
  {
    id: '6',
    name: 'Greta van fleet - Backstage',
    initial: '22:30',
    final: '23:59',
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
  friday: { events: [...events] },
  saturday: { events: [...events] },
  sunday: { events: [...events] },
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
