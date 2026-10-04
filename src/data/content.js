const PLACE_PHOTO_BASE =
  'https://scraper.places.sumerai.tech/api/v1/place-image?ref=places%2FChIJ4UROKgB_VxURlEK0XBICRts%2Fphotos%2F';

const photoIds = [
  'Aa-ngMZchNibQ88Swj_rLj9e_bLNg4oOLDJV9Wb22QOu3gHfNjTbA7HfX_lR2S_n1EkpTt0CRUJX4fZ_NdLRBJY2iQ9MdESZq1VELoZ6TWDfoUyYUj_EXk5g4LYCMnv6teXr22EB6gUmYi4j4CfkrLOiloFGWewfe-xWGrVpVXh1P4-xWrMcOHq5I304UtEem4BGviPtpu_mdt0L3iNDQWhhuzhp7uEyX7-0fvkPJ3rFW9HBYBFNukU-CssNp2vDKtxervlrSg9z6FONVKL8QlzpmeEXEfKCS9KBb109dztxAHsAVkr09VVEHhxcm-JY80WO4r29ETnj4PSNMpWq764BEXP0YJ-rQ8msUjyupUryu5JPoaIopwTl9mOnNMObyomErx0fVb9ULacGw2emBHRc78UdpxdAqyswcztRoPHcBmic9p4sBxq_PXFkRsmdw-Lh',
  'Aa-ngMYpOxRqWm-bviMdwx2nahPqSheZgqwWFrll6L98EfUjDJxgfUZTCObfea9v7BGex-UJJLGJpV0m3UtxQ6BBNFQUq1NsRkDq25GLlCPfGQ7Uhe7-7GgsQHxMExweCFW1F6gRnUMN03RB0cKHXvTcw2B1nqs8d9ws0rVlszQl9V-Z3Hc42aQ_bQkyqkoBlC08tgl13jG40mNfr0aUEld8lVBFofOxuP1a9pSBhielkZgvIlCF6_ukay61Gy0qd-SAaT9gzNqSX-10UfWSwlzD4iXM7pUqXdlgKJ1oM3zitqMR-2HjpcGIWEf_xzMcyGJETHVzP_TuyMRp-8UgiN4a316poRuonOdyG8J3yMV95og72_lcBkpntko3-h5aCuQihBPnm7PtNySmvAU7lyUcR8F-emCZjtEihYHJOU4bDPtvHEsyr9TGCu52mj35j2UE',
  'Aa-ngMb6CEqdcRopUkDDuh4CkDSuhGN9SCrGcb8sB61JSMx7fN8INGUaXX_q-MYYWnDmRIxYFZtXmq7lGH2jFFQqr0i9RGtMXNlMyIECYdB1tM5qi_rTgYW2mxefMT3iMu_BQbgG9GbtXiUdcz_1hITNwp0w_gmAcUPXKHXi7Nfx_wGjlObZ9hWA53IoQrELFwfBc_mL_TLagSWAmRVRy8IHt1lR21Nz3pSv9vFHpL96zRS934HucpWAJYyAk05HGbcxu7_cVQHYgcHh9-terf_89JRoIBDmSoiUzPkSnVclyV65qHE0RVIN9nVZck8AdeHj9tgFocqX2m9UxDWxU6p7sU7XG0dUI5TUEdHbXS9xvFpYUOtlFZ68hcTATE-Qu34L_5TSM1FKWGko-yi4hWPw26j_y9DiCfBafqWmbkOIAgnuH8FSmf6JKMM0a0ZBVA',
  'Aa-ngMZXtnDEwR6lNbIRcaVC81EzVZSOlxfY_j_axKczqlLjasrJfLsNSqmwnYKTYyu-MVda6tRlFGO8GCCFpNxLpXpEUFKhJsdEmKxU6ymrN36dBhbGGeUMz7c0RZ-qk6Q8d9jBnDxg-O0cwp2IOCU2hixGpr9FMrkomRqBfWv4DaDgKUf0CI4vAztRC7L38_LgtOZRoBq-swBJPljqw0Ae3nTl_jHzprU0zYSnpMWaLKfogcJOqdij_n5zTtmv4E4fFs7Sl0xZJyhiTuEA3lEaqgqOAlZT8EkyiVqc7YWJuxbpQeVYGuU2KkqYFjppU1I5e6TFXGF538NbSUVw6dgym2-olm5g0bBy3U1ogU8BEEM97cAyQFiglgAmO-PFaD09JY5CNkEx7sEZZQS74J_qVcvfrBYr10Jq5w9ZLAbY-RO0Ehngum2tUny2-U7Gm6MF',
  'Aa-ngMb7v8_RJU4ZTyMOtEC82mk3P9KEproBpDOLxSqtTuK9FswRdxMKBugk4apc6zrHVuQRuQz2Rd6e1M2smOWfsC967QZ9062E-nPlZT4I1Kn4zaRAUp2d-hxwciHMLksdLl7mVvzmfnelAr7lF1M0Vpophcn3JLGK5C57R5-jhEsjUVqMoQ683WBpBawux3UVOHjR6uQ_kXo_TsGK_Ovxk6JwxmIu1zGnU47s--stRUBRlKjJP1vNlRZW8KSy3_DIyE2qvXJbXCFqWEGL1GdzI4xIqodzOAocUHr2Ew5sHozI7faVsv1KbiUeeZxQ38M6q80sGpYSBXJXVh5y6cEtBAFnKgEyh9Aox45FIobrbKDfubQuAePMUnfQOgBzPIAkbsgIwaI3RedWJtux8Nveyjn24Qz04OFQxqJ47XINA3HVyB3i2xODoRCN7CiYzw',
  'Aa-ngMbeCATunH_B0ADVhRXJ_uyZYtwGxFEzBkFuzX8bsC6HwXVGaWPZZ0Ue-ieAel527cCsgFX15RUXhap49kfT723h2zhj6jL5bII1WQRohUq2Z2-8Jg9Du5AgB9j9OVlfumfjGg5gWaXV4IFIBTFHRpEmYHOrMBgybu64nWjYjLLi77rJjXBYIIaxQ2ydfEfMR_emanAy2kdQTOsB013dmvmFCEI3fyBrwLkDUQj1o7X_mSRwIS8Ij3XsVubjuadrk0IqxzT7eHVsKrek4f9drxbeOuPE9KFQpovPpp6upcnucMidmILnwk4pOZSbXOjQBdS37gRF7cHeO125JwhV_rcKCqaIPNKBQibzQXeptXDgFmBAxJfdjKTca3pEHxqNErpMeHadO2PN23qEpxwOST0FXPQQKQdmc4vDDbls76XTFlsb2-cdsGHjirOdbw',
  'Aa-ngMZEvKL8mhIdv_A5gLYs7pPdIB1TNSAckZdXU2zPLdapalT6_GwlV4esNDYWZjF5-1da4saISpzKMTrZwckvz15Kz73cTj3bKfxdr1sLKjQseWN7E40mXAjvHYKTNIPreehqOsd_WKJS2XQ4yW8Z4JikkgCAB1JJDXGMwgTglDdwdv9TnEynwekthk-cGi9Ucyuttcye9okCAvPg9qdc0Va0e4hq60xW6MiQbTz_jjSjUeN88uTBr50dalicT6LYtnjtZo__dtNitqj08A14LdpzzL19rgrs7xfepFFABWF3CcAuq1JuDOPKRxDLfMVab_uG_r1wdacc67BKOFBHj_O7_-x1TQysRgqRhEpBNlGemYu8yjh6KJ0vK0yaTuCmDAwG7NQxnG8L2jXDzNGt0aX22emd4RHzCQBKu_767xBIqFmfaCaD1l6b-9wIZxm6',
];

export const PHOTOS = photoIds.map((id) => PLACE_PHOTO_BASE + id);

export const LOGO =
  'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-19/636673255_17858263872610365_8073778589213937927_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=104&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy45ODUuQzMifQ%3D%3D&_nc_ohc=y2WDBWqiIloQ7kNvwGoDrZt&_nc_oc=AdrGWRdAEO489gyu6bw3DOw3ppLR0V71IPkpQqa_m9iGbWZGt6bZohmwb27TMuqcl0Q&_nc_zt=24&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=sTQDnfMQciz2rW_G5Yf7nQ&_nc_ss=7ca8c&oh=00_AQNHXKLt9iQ2UTgruY5akkCOjz4DVOszrVU0IUPqJt_sRA&oe=6AC819CE';

export const BUSINESS = {
  name: 'Sound Cyber Cafe',
  handle: '@sound.iraq',
  address: '88QG+VQ4 Al Adl, Baghdad, Baghdad Governorate, 10069',
  phone: '07806464646',
  tel: 'tel:+9647806464646',
  rating: 5,
  reviewCount: 15,
  followers: 5015,
  instagram: 'https://www.instagram.com/sound.iraq/',
  maps:
    'https://www.google.com/maps/search/?api=1&query=88QG%2BVQ4%20Al%20Adl%2C%20Baghdad%2C%20Baghdad%20Governorate',
  services: 'Cyber cafe • PC • PS5 • Cinema rooms • Billiard',
};

const postUrl = (path) => `https://scontent-ams2-1.cdninstagram.com/${path}`;

export const POSTS = [
  {
    img: postUrl(
      'v/t39.30808-6/825330000_122116900215456177_1625293636135819013_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=RicDSo9xoXgQ7kNvwE3rxQy&_nc_oc=AdoNu9mfi4ZtCKXECSXgSriMZEbGM4QkoR3BD55crR8RJrZwykYmg7GIXIcIMweRP8s&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=-QAkzDclVVjHaaIWwZ5Uog&_nc_ss=7ca8c&oh=00_AQM-7VNkbiPiZ8OFOVhIpuUZn8gcvspQ_V7gcdIeKwvO0w&oe=6AC81E6D'
    ),
    likes: 12,
    caption: 'حماس، منافسة وأجواء Gaming غير بكل مباراة — اللعب هنا إله طعم ثاني.',
    alt: 'Sound Cyber Cafe gaming post — competitive atmosphere',
  },
  {
    img: postUrl(
      'v/t39.30808-6/825329813_122116507923456177_2115807834924793191_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=koOtxv9coiwQ7kNvwG9kzBz&_nc_oc=AdrSGulxr6zXOO83l7kjGbVc_34p7gmerXvKMIGIukaCinClzzkaHVD2-VjINyyD7c8&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=sKLqKaVfYLTo5JFxYjJA3w&_nc_ss=7ca8c&oh=00_AQNtPi2YwjiBmbqe_hJzOykEOrO3FuvM93589EMUR3xDGA&oe=6AC81982'
    ),
    likes: 22,
    caption: 'داخل اللعبة… شعورك مختلف. جاهز تدخل عالمك؟',
    alt: 'Player inside the game at Sound Cyber Cafe',
  },
  {
    img: postUrl(
      'v/t39.30808-6/825329694_122115975099456177_8452570897752458122_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=yf4v12YlzxIQ7kNvwECSRdJ&_nc_oc=AdqxERtoNQ3dUNCjTWkzIC76oHJ3WMqTa1Q2lxdCAEcWK-oDyJtISgiGQt4dUfllgPM&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=AKg4o_d6ZiS5i5hrH1Kdaw&_nc_ss=7ca8c&oh=00_AQP28G_-tHi4b2WoeNNf67UOhmDYld0xiQQ-BVLvvlAAtw&oe=6AC834F4'
    ),
    likes: 15,
    caption: 'صوتك للعراق ولمّتنا بساوند — نشجّع أسود الرافدين سوه.',
    alt: 'Match night screening at Sound Cyber Cafe',
  },
  {
    img: postUrl(
      'v/t39.30808-6/825336420_122115813249456177_8895994219576313379_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=jwJG6iv7RhcQ7kNvwHir3bY&_nc_oc=AdoRrn3Xpd2riB87NcM2szcpeNZlaWglHilAyq6H4cuMzSgixeJ1PTboLZuWih_4eZ8&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=JecvKR5gMYQJ7sDkXWzpGQ&_nc_ss=7ca8c&oh=00_AQNBAC2m6Tnuo98mvGkHmRhbxAqCuRld0BsrOm5Ccx41hA&oe=6AC836AA'
    ),
    likes: 25,
    caption: 'بطولة ساوند المفتوحة للبليارد — 10 Ball.',
    alt: 'Billiard tables at Sound Cyber Cafe',
  },
  {
    img: postUrl(
      'v/t39.30808-6/825336580_122115676941456177_9105182612550639243_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=kIGvcAgRB80Q7kNvwE47O_a&_nc_oc=AdqO4DZZ4ezhNH8n5ZcLSg-nmWx1C_W8UCo__609c6NV5VkyRipdaAkWMjQVFyxJ0b8&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=82PXrLyxRIdyFyyq2HhEwQ&_nc_ss=7ca8c&oh=00_AQPxALuyQAhkzoi1yKJGLkqYeAi_Bl659dAIdIYjDGtSbg&oe=6AC8AF2'
    ),
    likes: 21,
    caption: 'العراق يلعب وساوند يجمعنا — خليجي 27.',
    alt: 'Fans watching the match together at Sound Cyber Cafe',
  },
  {
    img: postUrl(
      'v/t39.30808-6/825322167_17891909850610365_7103759750048816527_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=Mzk5NDAwMDgzMjYwNTgyOTYyMTE3ODkxOTA5ODQ3NjEwMzY1.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjEwODAuc2RyLnZpZGVvX2RlZmF1bHRfY292ZXJfZnJhbWUuQzMifQ%3D%3D&_nc_ohc=O4eGIAYIjzkQ7kNvwEmFZYm&_nc_oc=AdrvuqDFYr4KdeGu6faoIBHbGYrsGAHhXWy0mLX33sOBnLIHgcreScwcOnfgs2v_S5c&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=gvXUsAiLlXGM4UmgpoH8EA&_nc_ss=7ca8c&oh=00_AQO2gHh6O5Gk2uV22Anywk3TgITMpW6XtlzuyfpTgNxh7A&oe=6AC832E8'
    ),
    likes: 108,
    caption: 'بطولة البليارد الكبرى داخل ساوند سايبر كافيه.',
    alt: 'Billiard grand tournament promotion at Sound Cyber Cafe',
  },
];

export const ZONES = [
  {
    name: 'PC Zone',
    desc: 'GAMING RIGS • HEADSETS • CHAIRS',
    note: 'Sit down, log in, play. Ready rigs kept running for long sessions.',
    img: POSTS[1].img,
    alt: 'PC gaming setup at Sound Cyber Cafe',
  },
  {
    name: 'PS5 Room',
    desc: 'DUAL SENSE • BIG SCREENS • COUCH',
    note: 'Grab a controller and a friend — the PS5 room is made for two.',
    img: POSTS[0].img,
    alt: 'PS5 gaming session at Sound Cyber Cafe',
  },
  {
    name: 'Cinema Room',
    desc: 'PRIVATE SCREEN • MATCH NIGHTS',
    note: 'Match nights and screenings with the whole squad in one room.',
    img: POSTS[2].img,
    alt: 'Cinema room screening a match at Sound Cyber Cafe',
  },
  {
    name: 'Billiard',
    desc: '10-BALL TABLES • OPEN TOURNAMENTS',
    note: 'Bracket nights and open tournaments on the tables downstairs.',
    img: POSTS[3].img,
    alt: 'Billiard table at Sound Cyber Cafe',
  },
];

export const GALLERY = [
  { img: PHOTOS[0], alt: 'Interior of Sound Cyber Cafe in Al Adl, Baghdad' },
  { img: PHOTOS[1], alt: 'Players at Sound Cyber Cafe' },
  { img: PHOTOS[2], alt: 'Seating area inside Sound Cyber Cafe' },
  { img: PHOTOS[4], alt: 'Gaming floor of Sound Cyber Cafe' },
  { img: PHOTOS[6], alt: 'Corner of Sound Cyber Cafe in Baghdad' },
];

export const STEPS = [
  {
    label: 'SELECT',
    title: 'Pick your rig',
    text: 'PC or PS5 — choose your seat and we get you set up fast.',
    img: PHOTOS[1],
    alt: 'Choosing a gaming rig at Sound Cyber Cafe',
  },
  {
    label: 'LINK UP',
    title: 'Bring the squad',
    text: 'Log in, party up and get everyone in the same room together.',
    img: PHOTOS[3],
    alt: 'Friends playing together at Sound Cyber Cafe',
  },
  {
    label: 'PLAY',
    title: 'Stay in the match',
    text: 'Comfortable seats, cool rooms and drinks on hand for the long games.',
    img: PHOTOS[4],
    alt: 'Long gaming session at Sound Cyber Cafe',
  },
  {
    label: 'RUN IT BACK',
    title: 'Come for the next one',
    text: 'Tournaments, billiard brackets and match nights keep the calendar full.',
    img: PHOTOS[5],
    alt: 'Tournament night at Sound Cyber Cafe',
  },
];

export const REVIEWS = [
  {
    name: 'Montadar Alkadhimi',
    quote: 'One of the most beautiful places',
    rating: 5,
    tag: 'Google review',
    tint: 'bg-lav',
  },
  {
    name: 'Mostafa Hassan',
    quote: 'excellent',
    rating: 5,
    tag: 'Google review',
    tint: 'bg-pink',
  },
  {
    name: 'سيد صادق',
    quote: '',
    rating: 5,
    tag: 'Google review',
    tint: 'bg-gold',
  },
  {
    name: 'Sarmad Alhasani',
    quote: '',
    rating: 5,
    tag: 'Google review',
    tint: 'bg-butter',
  },
  {
    name: 'Duha Farhady',
    quote: '',
    rating: 5,
    tag: 'Google review',
    tint: 'bg-lav',
  },
];

export const MARQUEE_ONE = ['PC ZONE', 'PS5', 'CINEMA ROOM', 'BILLIARD', 'MATCH NIGHTS', 'SQUAD UP'];
export const MARQUEE_TWO = ['SEE YOU IN AL ADL', 'OPEN THE DOOR', 'PLAY LOUD', 'STAY LATE', '@SOUND.IRAQ'];