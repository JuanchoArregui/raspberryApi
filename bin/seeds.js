const mongoose = require('mongoose');
const Asset = require('../models/asset.model');
const Participant = require('../models/participant.model');
const Transaction = require('../models/transaction.model');
require('../configs/db.config');


const participantsData = [
  {
    email: 'juancho@brickfy.com',
    password: 'juancho',
    firstName: 'Juancho',
    lastName: 'Arregui',
    vatIdNumber: '2123234P',
    description: 'ironhacker ninja fullstack developer',
    image: 'http://www.elreferente.es/source/noticia/28594/brickfunding_juancho_arregui.jpg',
    address: [{
      country: 'España',
      address1: 'mi calle',
      address2: 'mi piso',
      city: 'mi ciudad',
      estate: "",
      postalCode: '234523'
      }],
    roll: 'Admin',

    dateBorn:"",
    foundation: 2018,
    brickfyParticipantId:  "yo",
    url: "https://www.juanchoarregui.com/",
    linkedin:  "" ,
    twitter:  "" ,
    facebook:  "" ,
    phone:  "",

    accountId: "",
    accounBalance: 10000
  },
  {
    email: '123@123.com',
    password: '123',
    firstName: 'Juancho',
    lastName: 'Arregui',
    vatIdNumber: '2123234P',
    description: 'ironhacker ninja fullstack developer',
    image: 'http://www.elreferente.es/source/noticia/28594/brickfunding_juancho_arregui.jpg',
    address: [{
      country: 'España',
      address1: 'mi calle',
      address2: 'mi piso',
      city: 'mi ciudad',
      estate: "",
      postalCode: '234523'
      }],
    roll: 'Admin',

    dateBorn:"",
    foundation: 2014,
    brickfyParticipantId:  "yo",
    url: "https://www.juanchoarregui.com/",
    linkedin:  "" ,
    twitter:  "" ,
    facebook:  "" ,
    phone:  "",

    accountId: "",
    accounBalance: 10000
  },
  {
    email: 'paco@gmail.com',
    password: 'paco',
    firstName: 'Paco',
    lastName: 'Martínez Soria',
    vatIdNumber: '23452344K',
    description: 'don erre que erre',
    image: 'http://s.libertaddigital.com/2016/08/26/martinez-soria-chic.jpg',
    address: [{
      country: 'España',
      address1: 'mi calle',
      address2: 'mi piso',
      city: 'mi ciudad',
      estate: "",
      postalCode: '234523'
      }],
    roll: 'Investor',

    dateBorn:"",
    foundation: "",
    brickfyParticipantId:  "",
    url: "",
    linkedin:  "" ,
    twitter:  "" ,
    facebook:  "" ,
    phone:  "",

    accountId: "",
    accounBalance: 100
  },
  {
    email: 'donald@whitehouse.gov',
    password: 'donald',
    firstName: 'Donald',
    lastName: 'Trump',
    vatIdNumber: '34568kjghj',
    description: 'el puto amo',
    image: 'https://pmcdeadline2.files.wordpress.com/2018/01/ap_881833377124.jpg?w=446&h=299&crop=1',
    address: [{
      country: 'USA',
      address1: 'mi calle',
      address2: 'mi piso',
      city: 'mi ciudad',
      estate: "",
      postalCode: '234523'
      }],
    roll: 'Investor',

    dateBorn:"",
    foundation: "",
    brickfyParticipantId:  "",
    url: "",
    linkedin:  "" ,
    twitter:  "" ,
    facebook:  "" ,
    phone:  "",

    accountId: "",
    accounBalance: 0
  },
  {
    email: 'amanciod@zara.com',
    password: 'amancio',
    firstName: 'Amancio',
    lastName: 'Ortega',
    vatIdNumber: '3453368kddjghj',
    description: 'mis labores',
    image: 'http://s.libertaddigital.com/2014/03/04/amancio-ortega-portada.jpg',
    address: [{
      country: 'Zaraland',
      address1: 'mi calle',
      address2: 'mi piso',
      city: 'mi ciudad',
      estate: "",
      postalCode: '234523'
      }],
    roll: 'Investor',

    dateBorn:"",
    foundation: "" ,
    brickfyParticipantId:  "",
    url: "",
    linkedin:  "" ,
    twitter:  "" ,
    facebook:  "" ,
    phone:  "",

    accountId: "",
    accounBalance: 99999999
  },
  {
    email: 'info@housers.com',
    password: 'housers',
    firstName: 'Housers',
    lastName: '',
    vatIdNumber: 'atopedeIVA',
    description: 'Plataforma de inversión',
    image: 'https://www.housers.com/img/HOUSERS-logo-meta.png',
    address: [{
      country: 'Paña',
      address1: 'mi calle',
      address2: 'mi piso',
      city: 'mi ciudad',
      estate: "",
      postalCode: '234523'
      }],
    roll: 'Plataforma',

    dateBorn:"",
    foundation: 2015,
    brickfyParticipantId:  "",
    url: "https://www.housers.com/",
    linkedin:  "" ,
    twitter:  "" ,
    facebook:  "" ,
    phone:  "",

    accountId: "",
    accounBalance: 0
  },
  {
    email: 'info@prodigy.com',
    password: 'prodigy',
    firstName: 'Prodigy',
    lastName: '',
    vatIdNumber: 'atopedeIVA',
    description: 'Plataforma de inversión ',
    image: 'https://internationalfintech.com/wp-content/uploads/2017/02/Prodigy-Network.png',
    address: [{
      country: 'USA',
      address1: 'mi calle',
      address2: 'mi piso',
      city: 'mi ciudad',
      estate: "",
      postalCode: '234523'
      }],
    roll: 'Plataforma',

    dateBorn:"",
    foundation: 2015,
    brickfyParticipantId:  "",
    url: "https://www.housers.com/",
    linkedin:  "" ,
    twitter:  "" ,
    facebook:  "" ,
    phone:  "",

    accountId: "",
    accounBalance: 0
  }, 
  {
    email: 'info@brickx.com',
    password: 'brickx',
    firstName: 'Brickx',
    lastName: '',
    vatIdNumber: 'atopedeIVA',
    description: 'The BRICKX team is passionate about creating easy and affordable access to the property market for all Australians. With collective backgrounds in technology, property, financial services, e-Commerce and marketing, we have seized the opportunity to transform the way consumers buy and sell investment property in Australia.',
    image: 'https://australianfintech.com.au/wp-content/uploads/2018/02/Brickx.jpg',
    address: [{
      country: 'USA',
      address1: 'mi calle',
      address2: 'mi piso',
      city: 'mi ciudad',
      estate: "",
      postalCode: '234523'
      }],
    roll: 'Plataforma',

    dateBorn:"",
    foundation: 2018,
    brickfyParticipantId:  "ka918zp1crtl9csi08971dkb1763gh79qqyu9155",
    url: "https://www.brickx.com/",
    linkedin:  "" ,
    twitter:  "" ,
    facebook:  "" ,
    phone:  "",

    accountId: "",
    accounBalance: 0
  },
  {
    email: 'info@inveslar.com',
    password: 'inveslar',
    firstName: 'inveslar',
    lastName: '',
    vatIdNumber: 'atopedeIVA',
    description: "Inveslar: The Urban Investors is a crowdfunding real estate platform open and accessible to anyone. Through Internet, without hindrance or bureaucracy, anyone can access the real estate sector and make their savings surrender. It all starts with a detailed analysis of each of the areas of major cities. Then it continues with the selection process of investment, founded on four pillars: 1.Find the best location 2.Locate the most interesting opportunities 3.Make the necessary reforms to give a new life to the property 4.Democratize access to opportunities The next step is to make an even more attractive and profitable investment. To do this, we will have a promoter, the indispensable partner to help us set a funding target that includes acquisition, taxes, notary fees, renovations and all costs related to the operation. In this way, we ensure that at the last moment no unexpected expenses arise. In addition, we will take charge of managing the property and will take care of creating the limited company. We also manage the credits, we take care of coordinating the payment of fees and recovery, as well as monitoring and informing the investors through our online platform. Once ready, we will publish the project on the web, offering the possibility to anyone to participate in the opportunity. You, for example. If you decide to participate, from a small investment on, you will acquire a percentage of shares of the limited company through a capital increase in the case of Equity plans, or you will acquire a title of collection in the case of Lending plans. And as the company will be duly constituted and registered, you will not even have to go to the notary at the time of the extension. We take care that it is so. In addition, you will have a private area that allows you to access to all project information at all times, with a control panel to carry out a detailed track of all your investments. In this way you can also diversify your operations and minimize risk. Having reached 100% of the capital, the project will be financed, the funds will be transferred to the Project Company and the asset will be purchased. Depending on the property, it will be rent and dividends will be distributed monthly, or it will be sold and profits will be distributed. Then we will take care to liquidate and dissolve the Limited Company. After obtaining the benefits of your investment, we'll credit them to your account Inveslar, and from there you can transfer them to your checking bank account, without fees of any kind.",
    image: 'https://inveslar.com/img/logo.png',
    address: [{
      country: 'Spain',
      address1: 'mi calle',
      address2: 'mi piso',
      city: 'mi ciudad',
      estate: "",
      postalCode: '234523'
      }],
    roll: 'Plataforma',

    dateBorn:"",
    foundation: 2016,
    brickfyParticipantId:  "1byw16s0x1j14pkyshpuoweihh6unmuc35j16yl1",
    url: "https://www.inveslar.com/",
    linkedin:  "" ,
    twitter:  "" ,
    facebook:  "" ,
    phone:  "" ,

    accountId: "",
    accounBalance: 0

  },
  {
    email: 'info@alfabricks.com',
    password: 'alfabricks',
    firstName: 'alfabricks',
    lastName: '',
    vatIdNumber: 'atopedeIVA',
    description:"ALFABRICKS es una comunidad que te permite realizar inversiones en inmuebles sin necesidad de invertir grandes sumas y con muy altas rentabilidades. Gracias al profundo conocimiento del sector así como a una gestión eficiente de los procesos somos capaces de ofrecer oportunidades de inversión sin necesidad de que pierdas tiempo." ,
    image: 'http://alfabricks.com/wp-content/uploads/2016/11/alfabricks-logo.png',
    address: [{
      country: 'Spain',
      address1: "Calle del Padre Jesús Ordóñez 18",
      address2: '',
      city: 'Madrid',
      estate: "",
      postalCode: '28002'
      }],
    roll: 'Plataforma',

    dateBorn:"",
    foundation: 2016,
    brickfyParticipantId:  "1byw16s0x1j14pkyshpuoweihh6unmuc35j16yl1",
    url: "https://www.alfabricks.com/",
    linkedin:  "" ,
    twitter:  "" ,
    facebook:  "" ,
    phone:  "" ,

    accountId: "",
    accounBalance: 0
  }
 
];

const assetsData = [
  {
    brickfyAssetId:  "10qqbegsg815xt136e159v17r612un3ta19i5xlv" ,
    name: "Miller St",
    owner:"ka918zp1crtl9csi08971dkb1763gh79qqyu9155",
    ini: 1430784000000 ,
    end: 1521829558921 ,
    disinvestment: 36 ,
    gross: 4.94 ,
    net: 3.17 ,
    coc: 2.41 ,
    
    status:  "open" ,
    target: 952250 ,
    currency:  "EUR" ,    
    minimum: 95 ,    
    investors: 1121 ,
    completed: 59 ,

    address: [{
      country: 'Australia',
      address1: "4/6 Miller St",
      address2: '',
      city: 'Camberra',
      estate: "",
      postalCode: 'BN9876'
      }],

    urlAsset: "https://www.brickx.com/properties/PRA01/summary",      
    images: [
      "https://s3-ap-southeast-2.amazonaws.com/livebrickx/propertyImages/PRA01/001.jpg",
      "https://s3-ap-southeast-2.amazonaws.com/livebrickx/propertyImages/PRA01/002.jpg",
      "https://s3-ap-southeast-2.amazonaws.com/livebrickx/propertyImages/PRA01/003.jpg",
      "https://s3-ap-southeast-2.amazonaws.com/livebrickx/propertyImages/PRA01/004.jpg",
      "https://s3-ap-southeast-2.amazonaws.com/livebrickx/propertyImages/PRA01/005.jpg",
      "https://s3-ap-southeast-2.amazonaws.com/livebrickx/propertyImages/PRA01/006.jpg",
      "https://s3-ap-southeast-2.amazonaws.com/livebrickx/propertyImages/PRA01/007.jpg",
      "https://s3-ap-southeast-2.amazonaws.com/livebrickx/propertyImages/PRA01/008.jpg"
    ] ,
    description:  `* 2 bedroom, 1 bathroom, 2 car spaces, townhouse that has been architecturally renovated to a high standard
    * Outdoor deck and generous multi-purpose garage suitable for 2 cars
    * Blue chip suburb with high rental demand due to its location and popularity amongst young professionals
    * Close to popular shopping, restaurant and café destination of Chapel Street, and close proximity to St Kilda Beach
    * Excellent transport links to Melbourne CBD
    
    **The Property**
    Architecturally renovated to a high standard, this property boasts many desirable features. A combination of northern light, crafted granite island bench, solid Victorian Ash open staircase, open plan kitchen and living area that spills out to a generous, private, sun-drenched deck, should make this property popular amongst renters.
    Accommodation includes two well-proportioned bedrooms complete with custom built-in wardrobes and a central bathroom. Further features include modern appliances, ducted cooling, Royal Oak timber flooring, car accommodation for up to two vehicles (this space is extremely flexible and could suit a home gym or office) and a generous European laundry with drying racks.
    
    **Location**
    Prahran is an extremely vibrant area, catering for a young and dynamic lifestyle. It is 5km south east of Melbourne’s CBD, in close proximity to St Kilda Beach, and thrives with some of Melbourne’s best restaurants, cafes and bars running along and off popular Chapel Street. In addition, the desirable location offers excellent transport links and options for accessing Melbourne CBD. Due to the suburb’s location, cultural characteristics and popularity with younger age groups, it is a highly desirable location for renters.
    According to the most recent census, the predominant age group in Prahran is 20-44 years, accounting for over 57% of the residents. In addition, over 57% of the residents work as either managers or in a professional occupation. The suburb is particularly popular with both unmarried individuals and families, with a household composition of 46.2% family households and 40.9% single person households.
    
    **Investment Case**
    Exchange of the Prahran property occurred during April 2015. The property was acquired for $1.15m. Acquisition costs (including stamp duty, legal fees and buyers agents fees) were $75,905, and will be subjected to linear amortization over 5 years (see Capital Returns Tab for a breakdown of Acquisition Costs). In addition, a cash reserve of $4,095 was raised for the investment, giving a total asset value of $1.23m and a launch Brick price of $123.00. An independent valuation conducted on 14 June 2016, valued the property at $1.15m.
    As at April 2015, when the property exchange occurred, the property was tenanted at $750pw, providing an expected gross yield of 3.20% and net yield (paid monthly) of 2.68% following expenses.  As at April 2015, Prahran had a historical capital growth rate of 6.10% per annum, based on the last 5 years. Assuming the continuation of this level of growth, BRICKX’s estimated return on investment (ROI) is 8.78%. This estimation was based on facts as at April 2015, and any subsequent changes to growth rates or levels of rental income would have an effect on estimated ROI. In addition, fluctuations in Brick Price will influence the effective return, and thus you should regularly refer to Returns and Valuation info on the summary page for the latest information.
    
    **Property Management**
    BRICKX uses a third party managing agent to manage the properties on behalf of investors. Investors will not be required to take an active part in managing a property and will not be consulted for any decisions relating to a property. The Manager will operate within the management agreement framework for all properties so that Investors are left only to manage their portfolio. The Manager pro-actively manages the properties to ensure that they are consistently let and kept to the highest standards to protect the Investors investment, both from a capital and rental income perspective.
    There may be periods of time where a property is vacant, and this is covered by a contingency fund that provides over 3 months of cover. The Manager has also put in place procedures to ensure that before a lease expires, the tenant will be asked to confirm their position with regards to the tenancy agreement. If the tenant does not sign a new lease within a certain time, the property will be advertised for lease. The rental price may be slightly reduced in order to attract a new tenant if necessary. BRICKX will always seek to achieve a balance between the forecast yield and market conditions to minimise the risk that the property is vacant beyond the 3 months of operating expenses that the contingency fund will cover.
    
    **Important Notice**
    The advice provided to you is general advice only. It has been prepared and presented without taking into account your personal objectives, financial situation or needs. Before making any decision in relation to BRICKX or any products offered by BRICKX you should read the Product Disclosure Statement (PDS) and consider whether BRICKX is right for you.
    BRICKX products are issued by Theta Asset Management Limited (ABN 37 071 807 684) (AFSL 230920) (Theta).  The Brick Exchange Pty Ltd (ABN 27 600 762 749) (BRICKX) is the manager of BRICKX Platform (ARSN 613 156 433).  BRICKX is an authorised representative (001000043) of BRICKX Financial Services Pty Limited (ACN 616 118 988) (BRICKX Financial Services). None of BRICKX, BRICKX Financial Services or Theta, guarantee any rate of return or the capital value or return of any money invested. Past performance referred to is no guarantee of future performance of the relevant financial product and is not a reliable indicator of future performance.
    `
  },
  {
    brickfyAssetId:  "12omnez1bxp65vx3ntyk01ua1h1ugngd3bz75wsb" ,
    name: "Pestalozzi  241 - Campaña 1",
    owner:"ka918zp1crtl9csi08971dkb1763gh79qqyu9155",
    ini: 1521829558994 ,
    end: 1525106973973 ,
    disinvestment: 24 ,
    gross: 4.94 ,
    net: 3.17 ,
    coc: 0 ,
    
    status:  "open" ,
    target: 952250 ,
    currency:  "EUR" ,    
    minimum: 95 ,    
    investors: 1121 ,
    completed: 8.875 ,

    address: [{
      country: 'Australia',
      address1: "J. Enrique Pestalozzi 241",
      address2: '',
      city: 'Narvarte Poniente',
      estate: "",
      postalCode: 'BN9876'
      }],

    urlAsset: "https://www.briq.mx/proyectos/pestalozzi241_2",      
    images: [
      "https://d359dzbkfqzc9h.cloudfront.net/uploads/project/photo/94/pestalozzi1.png",
      "https://d359dzbkfqzc9h.cloudfront.net/uploads/secondary_photo/photo/260/pestalozzi5.png",
      "https://d359dzbkfqzc9h.cloudfront.net/uploads/secondary_photo/photo/261/pestalozzi3.png",
      "https://d359dzbkfqzc9h.cloudfront.net/uploads/secondary_photo/photo/262/pestalozzi4.png",
      "https://d359dzbkfqzc9h.cloudfront.net/uploads/secondary_photo/photo/263/pestalozzi2.png"
    ] ,
    description:  `
    Pestalozzi 241 es una oportunidad de participar en una inversi&#xF3;n a trav&#xE9;s de un instrumento de&#xA0;<strong>Deuda Senior</strong>&#xA0;con una&#xA0;<strong>tasa fija anual del 13.25%</strong>, a un&#xA0;<strong>plazo de 24 meses</strong>, el desarrollador tiene la posibilidad de prepago sin penalidad a&#xA0;<strong>partir del tercer mes de haberse ejecutado la campa&#xF1;a. Los pagos por intereses se har&#xE1;n de manera trimestral.</strong></p><p>Es un proyecto residencial de mediana escala dirigido a familias de nivel socioecon&#xF3;mico medio-alto. La ciudad de M&#xE9;xico present&#xF3; en el 2016 una demanda de ochenta y tres mil trescientas setenta y cinco viviendas, un 128% por encima del promedio registrado a nivel nacional, de los cuales solo se cubri&#xF3; el 40%, haci&#xE9;ndolo uno de los mercados m&#xE1;s din&#xE1;micos del pa&#xED;s.</p><p>El proyecto consiste en la construcci&#xF3;n y venta de 5 departamentos,&#xA0; ser&#xE1; llevado acabo por&#xA0;<strong>Extracto</strong>, empresa fundada en el 2004, cuyos socios cuentan con amplia experiencia en el sector de los Bienes Ra&#xED;ces. A la fecha del presente prospecto DDA ha invertido aproximadamente $13,358,609 (trece millones trescientos cincuenta y ocho mil seiscientos nueve pesos m.n) en la adquisici&#xF3;n de terreno, tr&#xE1;mites notariales, preliminares, licencia y permisos.
    `
  },
  {
    brickfyAssetId:  "120316vd98kn46asnwu2nr86ao1d1i17chugq1ba" ,
    name: "Pestalozzi  241 - Campaña 2",
    owner:"v8g6kjcgq44h18o116v71287dmdwq8kt4qsqozj1",
    ini: 1513178406000 ,
    end: "" ,
    disinvestment: 6 ,
    gross: 8.54 ,
    net: 13.25 ,
    coc: 2.41 ,
    
    status:  "open" ,
    target: 1000000 ,
    currency:  "EUR" ,    
    minimum: 800 ,    
    investors: 21 ,
    completed: 40 ,

    address: [{
      country: 'Mexico',
      address1: "4/6 Miller St",
      address2: '',
      city: 'Camberra',
      estate: "CDMX",
      postalCode: 'BN9876'
      }],

    urlAsset: "https://expansive.mx/proyecto/the-assemblage-v2",      
    images: [
      "https://expansive.mx/uploads/project_images/20171213-162036_50_du7h5.jpg",
      "https://expansive.mx/uploads/project_images/20171213-164202_50_Ez4CB.png",
      "https://expansive.mx/uploads/project_images/20171213-164207_50_yTd1y.png",
      "https://expansive.mx/uploads/project_images/20171213-164211_50_hDRcs.png",
      "https://expansive.mx/uploads/project_images/20171213-164216_50_2v9Le.png",
      "https://expansive.mx/uploads/project_images/20171213-164220_50_w5s2k.png",
      "https://expansive.mx/uploads/project_images/20171213-164236_50_X5bre.png"
    ] ,
    description:  `
    Park tendrá 10,600 metros cuadrados de espacio de coworking y 2,100 metros cuadrados de espacio comercial de trafico alto. Este proyecto se trata de una renovación de una propiedad comercial ubicada en 329-331 Park Avenue South, Manhattan, New York. El edificio fue adquirido recientemente y la construcción comenzará pronto. Se espera que las operaciones comiencen en el 1T de 2019. La operación de la propiedad se hará conjuntamente con Kokua, un operador hotelero independiente con más de 10 años de experiencia en el sector de hospitalidad y ha trabajado con reconocidas marcas como Starwood, Hilton y Marriott. Shorewood Real Estate Group es quién estará a cargo de la construcción del proyecto. La inversión mínima es de $10,000 dólares al tipo de cambio del día de la transferencia.`
  },
  {
    brickfyAssetId:  "13yk8fj10q5178516p88rtz717tl12kwp2y8x1q5" ,
    name: "The Assemblage V2",
    owner:"bnsx0harb11mphnj6kh12rs14qq67wxm946imlg5",
    ini: 1522155421208 ,
    end: 1524242975204 ,
    disinvestment: 16 ,
    gross: 4.94 ,
    net: 3.17 ,
    coc: 2.41 ,
    
    status:  "open" ,
    target: 1000000 ,
    currency:  "EUR" ,    
    minimum: 200 ,    
    investors: 13 ,
    completed: 6.65 ,

    address: [{
      country: 'Mexico',
      address1: "Loma de Tarango 133",
      address2: '',
      city: 'Col Lomas de Tarango',
      estate: "",
      postalCode: 'BN9876'
      }],

    urlAsset: "https://www.briq.mx/proyectos/lomadetarango133_1",      
    images: [
      "https://d359dzbkfqzc9h.cloudfront.net/uploads/project/photo/87/001.jpg",
      "https://d359dzbkfqzc9h.cloudfront.net/uploads/secondary_photo/photo/230/004.jpg",
      "https://d359dzbkfqzc9h.cloudfront.net/uploads/secondary_photo/photo/231/003.jpg",
      "https://d359dzbkfqzc9h.cloudfront.net/uploads/secondary_photo/photo/232/005.jpg",
      "https://d359dzbkfqzc9h.cloudfront.net/uploads/secondary_photo/photo/233/006.jpg",
      "https://d359dzbkfqzc9h.cloudfront.net/uploads/secondary_photo/photo/234/002.jpg",
      "https://d359dzbkfqzc9h.cloudfront.net/uploads/secondary_photo/photo/235/007.jpg",
    ] ,
    description:  `
    Lomas de Tarango 133&#xA0; es una oportunidad de participar en una inversi&#xF3;n a trav&#xE9;s de un instrumento de&#xA0;<strong>Deuda Preferente</strong>&#xA0;con una&#xA0;<strong>tasa&#xA0; anual estimada del 17.00%</strong>, a un&#xA0;<strong>plazo estimado de 16 meses y un m&#xE1;ximo de 24 meses.&#xA0;</strong>&#xA0;<b>El pago de los intereses se har&#xE1; al vencimiento del proyecto.</b></p><p style="text-align: justify;">Es un proyecto residencial de mediana escala dirigido a familias de nivel socioecon&#xF3;mico medio-alto. La ciudad de M&#xE9;xico present&#xF3; en el 2016 una demanda de ochenta y tres mil trescientas setenta y cinco viviendas, un 128% por encima del promedio registrado a nivel nacional, de los cuales solo se cubri&#xF3; el 40%, haci&#xE9;ndolo uno de los mercados m&#xE1;s din&#xE1;micos del pa&#xED;s.</p><p style="text-align: justify;">El proyecto consiste en la construcci&#xF3;n y venta de 2 casas&#xA0;, el cual ser&#xE1; llevado a cabo por&#xA0;<strong>3House.</strong>&#xA0;</p><p style="text-align: justify;">Suponiendo que las unidades se vendieran al precio proyectado por el plan de negocio, el rendimiento esperado se ver&#xED;a de la siguiente forma:</p><p style="text-align: justify;"><br></p><table class="table table-bordered"><tbody><tr><td><b>Mes de Venta</b></td><td style="text-align: center;"><b>6</b></td><td style="text-align: center;"><b>7</b></td><td style="text-align: center;"><b>8</b></td><td style="text-align: center;"><b>9</b></td><td style="text-align: center;"><b>10</b></td><td style="text-align: center;"><b>11</b></td><td style="text-align: center;"><b>12</b></td></tr><tr><td><b>Rendimiento Anual esperado</b></td><td style="text-align: center;">24.00%</td><td style="text-align: center;">22.00%</td><td style="text-align: center;">20.50%</td><td style="text-align: center;">19.33%</td><td style="text-align: center;">18.40%</td><td style="text-align: center;">17.64%</td><td style="text-align: center;">17.00%</td></tr></tbody></table><p style="text-align: justify;">El detalle se puede ver en el prospecto de inversi&#xF3;n.*Suponiendo que las unidades se vendieran al precio proyectado por el plan de negocio, a partir del doceavo mes el rendimiento esperado ser&#xED;a de 17% anual simple.
    `
  },
  {
    brickfyAssetId:  "11yo21b17hs1oz14ur17ux1ar5m2djxggvbjmyhe" ,
    name: "Loma de Tarango 133 - Campaña 1",
    owner:"v8g6kjcgq44h18o116v71287dmdwq8kt4qsqozj1",
    ini: 1522667782369 ,
    end: 1546534273402 ,
    disinvestment: 6 ,
    gross: 8.5 ,
    net: 14.00 ,
    coc: 0 ,
    
    status:  "open" ,
    target: 7500000 ,
    currency:  "EUR" ,    
    minimum: 750 ,    
    investors: 5 ,
    completed: 6.65 ,

    address: [{
      country: 'USA',
      address1: "652 Harvard Street",
      address2: '',
      city: 'New Milford',
      estate: "",
      postalCode: ''
      }],

    urlAsset: "https://www.fundthatflip.com/deals/13627",      
    images: [
      "https://ftf-uploads-production.s3.amazonaws.com/images/2dcd8760-88a5-43b7-b516-bf0a804b37ed/2.png",
      "https://ftf-uploads-production.s3.amazonaws.com/images/2dcd8760-88a5-43b7-b516-bf0a804b37ed/3.png",
      "https://ftf-uploads-production.s3.amazonaws.com/images/2dcd8760-88a5-43b7-b516-bf0a804b37ed/4.png",
      "https://ftf-uploads-production.s3.amazonaws.com/images/2dcd8760-88a5-43b7-b516-bf0a804b37ed/5.png",
      "https://ftf-uploads-production.s3.amazonaws.com/images/2dcd8760-88a5-43b7-b516-bf0a804b37ed/6.png",
      "https://ftf-uploads-production.s3.amazonaws.com/images/2dcd8760-88a5-43b7-b516-bf0a804b37ed/7.png",
      "https://ftf-uploads-production.s3.amazonaws.com/images/2dcd8760-88a5-43b7-b516-bf0a804b37ed/8.png",
      "https://ftf-uploads-production.s3.amazonaws.com/images/2dcd8760-88a5-43b7-b516-bf0a804b37ed/12.png",
      "https://ftf-uploads-production.s3.amazonaws.com/images/2dcd8760-88a5-43b7-b516-bf0a804b37ed/9.png",
      "https://ftf-uploads-production.s3.amazonaws.com/images/2dcd8760-88a5-43b7-b516-bf0a804b37ed/11.png",
      "https://ftf-uploads-production.s3.amazonaws.com/images/2dcd8760-88a5-43b7-b516-bf0a804b37ed/10.png"
    ],
    description:  `
    Fund That Flip closed the loan on this property on March 28, 2018. Your investment will begin accruing interest on the day it clears escrow.</p><p>Fund That Flip has provided a first distribution of $119,190 to the developer at closing for a loan to purchase of 76.9%. Fund That Flip is holding back $4,935 for 3 months of pre-paid interest.</p><p>The construction budget is $52,000. Fund That Flip will finance $51,275 of the total construction budget. Fund That Flip disburses constructions funds based on verification of work performed, as determined by an independent 3rd party inspection firm. Fund That Flip reviews each inspection report and releases funds based on the percentage of completion of the project. Fund That Flip expects to make 1 construction draws, but may schedule additional inspections as needed. The final draw will be released after all work is verified to be complete.</p><p>Over the course of the project, the developer will contribute an estimated $46,070 in equity, including an estimated $35,810 at the time of closing. The total loan-to-ARV is 57.1%. There is a 3 month pre-payment penalty, meaning investors will earn interest through June 28, 2018, even if paid back earlier. The term of the underlying loan is 9 months with an option to extend for an additional 3 months. Should Fund That Flip choose to grant the extension, investors will earn an additional one-time 0.5% fee on their investment.
    `
  }

];
        


Asset.create(assetsData)
  .then(() => {
    console.info("Participants Seeds success:", assetsData);
  })
  .catch(error => {
    console.error("Participants Seeds error:", assetsData);
  });


Participant.create(participantsData)
  .then(() => {
    console.info("Participants Seeds success:", participantsData);
    mongoose.connection.close();
  })
  .catch(error => {
    console.error("Participants Seeds error:", participantsData);
    mongoose.connection.close();
  });


