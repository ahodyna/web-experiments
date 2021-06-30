let uaCities = ["Olenevka", "Urzuf", "Lebedyn", "Staryy Dobrotvir", "Druzhkivka", "Zhydachiv", "Vasylivka", "Ivano-Frankove", "Zvenihorodka", "Zuya", "Zuhres", "Zorkino", "Zolotyy Potik", "Zolotonosha", "Zolochiv", "Zolochiv", "Zol’noye", "Znomenka", "Zmiyiv", "Zlynka", "Zlatopil’", "Zinkivtsi", "Zhytomyrs’ka Oblast’", "Zhytomyr", "Zhvanets", "Zhuravka", "Zhuliany", "Zhukovka", "Zhovtnevoye", "Blahodatne", "Zhovkva", "Zhmerynka", "Zhigulina Roshcha", "Zhelyabovka", "Zhovti Vody", "Zhashkiv", "Zgurovka", "Zin’kiv", "Zemlyanichnoye", "Zelenyy Hay", "Zelene", "Zelenogor'e", "Zdolbuniv", "Zdovbytsya", "Zboriv", "Zbarazh", "Zavods’ke", "Zavallya", "Karolino-Buhaz", "Zatoka", "Zatyshshya", "Zastavna", "Zorya", "Zarech’ye", "Zarichchya", "Zarichne", "Zarechnoye", "Zaprudnoye", "Zaprudnoye", "Zaporizhzhya-Live", "Zaporiz’ka Oblast’", "Zaporizhia", "Zaozyornoye", "Zamost’ye", "Zaliztsi", "Zaliznyy Port", "Zaliznychne", "Zaliznychne", "Zalesnoye", "Zalesnoye", "Zalishchyky", "Zakutnivka", "Zakupne", "Zakarpattia Oblast", "Zahvizdya", "Zagnitkiv", "Zachepylivka", "Zabolotiv", "Yuzhnoye", "Yuzhne", "Yur”yivka", "Yuriv", "Yurkivka", "Yunga", "Yevpatoriya", "Yermakovo", "Yerky", "Yenikale", "Yenakiyeve", "Omelyaniv", "Yelyzavetivka", "Yelyzavethradka", "Yelanets’", "Yavoriv", "Yavoriv", "Yasna Polyana", "Yasinya", "Yasynuvata", "Yarmolyntsi", "Ivano Yaryzivka", "Yaremche", "Yampil’", "Yamnytsya", "Yalta", "Yalta", "Yahotyn", "Yahil’nytsya", "Yabluniv", "Yablon’ki", "Yablunytsya", "Vyshchetarasivka", "Vysoke", "Vysoke", "Vysokopillya", "Vysokyy", "Vyshkovo", "Vyshhorod", "Vyshehrad", "Vynohradiv", "Vylok", "Vylkove", "Vvedenka", "Vulkanovka", "Vulino", "Vugrinivka", "Vuhlyar", "Vradiyivka", "Voznesensk", "Voznesenka", "Voykovo", "Voskhod", "Voskhod", "Vorzel’", "Vorozhba", "Chernihivka", "Voronovytsya", "Voronizh", "Vorokhta", "Volyns’ka Oblast’", "Volovets", "Voloka", "Nikol's’ke", "Volodarka", "Volochysk", "Vil’ne", "Volnovakha", "Vil’nohirs’k", "Vovchans’k", "Voinka", "Vodyane", "Vladislavovka", "Volodymyr-Volynskyi", "Volodymyrivka", "Volodymyrets’", "Vyzhnytsya", "Vyshnivka", "Vyshneve", "Vyshneve", "Vynohradove", "Vynohradivka", "Vinogradnoye", "Vinnytsia", "Vinnyts’ka Oblast’", "Vil’nyans’k", "Vilino", "Veselynove", "Vesele", "Vesyoloye", "Vesyoloye", "Verkhovyna", "Verkhnya Syrovatka", "Verchnia Rozhanka", "Verkhnya Krynytsya", "Verkhniachka", "Verkhniy Yasenov", "Verkhniy Rohachyk", "Verkhnie Synevydne", "Verkhnesadovoye", "Verkhn’odniprovs’k", "Verenchanka", "Verbivka", "Verbuvativka", "Verbky", "Verbivka", "Verbany", "Rozivka", "Vendychany", "Velykoploske", "Velyka Mykhaylivka", "Vel'ky Sevl'yush", "Velykyy Klyuchiv", "Velyki Sorochyntsi", "Velyki Kopani", "Velikiye Borki", "Velykyy Burluk", "Velykyi Bereznyi", "Velyka Pysarivka", "Velyka Lepetykha", "Velyka Bilozerka", "Velyka Bahachka", "Velyka Oleksandrivka", "Vatutine", "Vasyshcheve", "Vasylivka", "Vasil’yevka", "Urochishche Vasil’yevka", "Vasilivika", "Vasylkiv", "Vashkivtsi", "Vary", "Varvarivka", "Varvarovka", "Varva", "Varshitsa", "Vapnyarka", "Valky", "Uzyn", "Uzhgorod", "Uzenbash", "Uyutnoye", "Uyutnaya", "Utkivka", "Ustynivka", "Uspenka", "Ushchel’noye", "Usatove", "Russkoye", "Uralo-Kavkaz", "Nyzhni Petrivtsi", "Uman", "Blahovishchens’ke", "Ulychne", "Ulaniv", "Ukrainka", "Ukrayinka", "Ukrayinka", "Ukraine", "Uhryniv", "Uhniv", "Uglovoye", "Vuhlehirs’k", "Vuhledar", "Uchkuyeva", "Vysokogornoye", "Tysmenytsya", "Tysmenychany", "Tynne", "Tyachiv", "Turka", "Turiys’k", "Turgenevka", "Turbiv", "Tulchyn", "Tukhlia", "Tsyurupyns’k", "Tsybulevka", "Tsybli", "Tsvetkovo", "Tsibulev", "Tsarychanka", "Pushkino", "Truskavets’", "Trukhaniv Island", "Trostyanets’", "Troyits’ko-Khartsyz’k", "Trypillia", "Trebukhiv", "Toshkivka", "Chystyakove", "Tomakivka", "Tovste", "Dachnoye", "Tokmak", "Tlumach", "Tyshkivka", "Tymoshivka", "Tetiiv", "Terpinnya", "Terny", "Ternivka", "Ternivka", "Ternovka", "Ternuvate", "Ternopil’s’ka Oblast’", "Ternopil", "Terenair", "Terebovlya", "Teplohirs’k", "Teplyk", "Teofipol", "Boykivske", "Telychka", "Tatarbunary", "Tarutyne", "Ostrovskoye", "Tarashcha", "Tankovoye", "Talalayivka", "Taburishche", "Syrayi", "Syevyerodonets’k", "Nyvky", "Svyatogorsk", "Svobodnaya Zhizn’", "Svityaz’", "Svitlovods’k", "Sverdlovs’k", "Svatove", "Svarychiv", "Svalyava", "Sutysky", "Surs’ko-Mykhaylivka", "Surs’ko-Lytovs’ke", "Sumy", "Sums’ka Oblast’", "Sukhyy Lyman", "Sukhovolya", "Stepnohirs’k", "Sukhodil’s’k", "Sukharka", "Sudova Vyshnya", "Sudak", "Subottsi", "Studenok", "Stryi", "Strogonovka", "Strabychovo", "Stizhkivs’ke", "Storozhynets’", "Stolbovoye", "Stetseva", "Stepanivka", "Stebnyk", "Stebliv", "Stavyshche", "Staryy Sambir", "Staryy Saltiv", "Staryy Merchyk", "Staryy Krym", "Stary Krym", "Stari Kuty", "Stari Bohorodchany", "Starovirivka", "Starosel’ye", "Starokostiantyniv", "Starokozache", "Starobesheve", "Starobil’s’k", "Starychi", "Stara Vyzhivka", "Stara Syniava", "Stara Darnytsya", "Stanislav", "Kadiyivka", "Sredniy Fontan", "Serednye Vodyane", "Serednye", "Sribne", "Spas’ke", "Spas", "Sovetskoye", "Satera", "Sosnovka", "Sosnytsya", "Solotvyno", "Solotvyn", "Solonka", "Solonytsivka", "Solnechnaya Dolina", "Solyonoye Ozero", "Solone", "Sokolove", "Sokolohirne", "Sokolinoye", "Sokyryany", "Sokal’", "Sofiyivka", "Sofiivka", "Sobolivka", "Sobatyn", "Sniatyn", "Oliva", "Snihurivka", "Snizhne", "Smila", "Sloviansk", "Slobidka", "Sloboda Zasluch’", "Sloboda", "Svyatohirs’k", "Slavuta", "Slavske", "Slaviv", "Slatyne", "Skvyra", "Skole", "Sknyliv", "Skhidnytsya", "Skalistoye", "Skalat", "Skakunka", "Skadovs’k", "Sytnyaky", "Synevyrska Poliana", "Synevyr", "Synel’nykove", "Simferopol", "Simeiz", "Shpola", "Shostka", "Sholokhove", "Shmidta", "Shklo", "Shyshaky", "Shyryayeve", "Shyroke", "Shyroke", "Shypyntsi", "Shevekova", "Shevchenko Vtoroy", "Shevchenkove", "Shevchenkove", "Shevchenkove", "Shevchenko", "Shestakovka", "Sheshory", "Shepetivka", "Matviyivka", "Urochishche Shelkovichnoye", "Shchors", "Shcherbynivka", "Shchemilovka", "Shchebetovka", "Shats’k", "Sharovechka", "Sharhorod", "Shalyhyne", "Shakhtars’k", "Shakh-Murza Staraya", "Shabo", "Shablykina", "Sivers’k", "Sebastopol City", "Sevastopol", "Serpneve", "Serhiyivka", "Seredyna-Buda", "Serebriya", "Sencha", "Semisotka", "Semypolky", "Semykhatky", "Semidvor'e", "Simeykyne", "Semenivka", "Semenivka", "Semenivka", "Semyonovka", "Sel’tse", "Selydove", "Silets’", "Syedove", "Sedniv", "Shchastya", "Schastlivoye", "Savran", "Savyntsi", "Sarny", "Sarata", "Sarabuz Russkiy", "Sambir", "Saki", "Sakhnovshchyna", "Sadzhavka", "Rzhyshchiv", "Rykhtychi", "Rybakivka", "Rybach'e", "Ruzhyn", "Ruska Poliana", "Rudne", "Rudniki", "Rudky", "Rubizhne", "Rozvadiv", "Rozivka", "Rozivka", "Rozhniativ", "Rozhniv", "Urochyshche Rozhkova", "Rozhyshche", "Rozdil", "Rozdil’na", "Rozy Lyuksemburh", "Rivne", "Roven’ky", "Rosvigovo", "Roskoshnyy", "Rozkishne", "Ropcha", "Romodan", "Romny", "Rokosovo", "Rokytne", "Rohatyn", "Radomyslivka", "Rodnikovoye", "Rodnikovo", "Rodionivka", "Rodyns’ke", "Rivnens’ka Oblast’", "Rivne", "Reshetilovskiy Kut", "Reshetylivka", "Rezervne", "Ripky", "Reni", "Rechka", "Razdol’noye", "Ratne", "Rozsypne", "Ralivka", "Rakiv Lis", "Rakoshyno", "Rakhiv", "Radomyshl", "Radcha", "Rabochiy Ugolok", "Piatykhatky", "Putyvl’", "Putilovka", "Pustomyty", "Pushcha-Vodytsya", "Pudlovtsy", "Pryluky", "Prudyanka", "Protsivka", "Pryyutivka", "Pryvillya", "Privol’noye", "Privetnoye", "Pryshyb", "Priozyornoye", "Prymors’ke", "Sartana", "Prymors’k", "Prykolotne", "Prigorodnoye", "Prigorodnoye", "Pridorozhnoye", "Prydniprovs’kyy", "Pryazovs’ke", "Preobrazhenka", "Peredmistna Slobidka", "Pozniaky", "Potok", "Portovoye", "Poroshkovo", "Porohy", "Popova", "Popilnia", "Popasna", "Poninka", "Pomichna", "Pomoriany", "Polyanka", "Poltavs’ke", "Poltavs’ka Oblast’", "Poltava", "Polonne", "Polohy", "Pokrovs’ke", "Pokrovka", "Pokotylivka", "Pohrebyshche", "Pidvolochysk", "Pidvynohradiv", "Podil", "Pidhirtsi", "Pidhorodne", "Pidhorodne", "Pidhorodna", "Podgornoye", "Pidhaytsi", "Pidbuzh", "Poshtove", "Pochaiv", "Pobugskoye", "Pniv", "Zaporozhe", "Urochishche Plavni", "Koktebel", "Plakhtiyivka", "Pivdenne", "Pyriatyn", "Pyrohovychi", "Pylypets", "Pikalovka", "Petrovs’ke", "Petrove", "Petropavlivs’ka Borshchahivka", "Petropavlivka", "Kurisove", "Petrykivka", "Petrikov", "Petranka", "Pesochin", "Piskivka", "Peschanoye", "Pishanka", "Peschana", "Pervomayskoye", "Pervomays’kyy", "Pervomays’k", "Pervomays’k", "Pershotravneve", "Manhush", "Perovo", "Perkovtsy", "Pereiaslav-Khmelnytskyi", "Pereval’s’k", "Perevalovka", "Pereval'noye", "Peresichna", "Peremyshlyany", "Perehonivka", "Perechyn", "Pechenizhyn", "Pchelinoye", "Pavlysh", "Pavlivka", "Pavlivka", "Pavlivka", "Pavlohrad", "Pasichna", "Parutyne", "Partyzany", "Adzhimushkay", "Partizanskoye", "Prokhladnoye", "Parizhskaya Kommuna", "Paraskoveyevka", "Panyutyne", "Panteleymonivka", "Pantayivka", "Ozerne", "Ozerne", "Ozerna", "Ovruch", "Ovidiopol", "Otyniya", "Otradnoye", "Otradnoye", "Otesh-Eli", "Ostroh", "Oster", "Osokorky", "Osypenko", "Orzhytsya", "Ortay", "Orlivshchyna", "Orlinoye", "Petrivka", "Orikhiv", "Ordzhonikidze", "Ordzhonikidze", "Orativ", "Opryshovtse", "Oposhnya", "Opolznevoye", "Onufriyivka", "Olyka", "Ol'shanskoye", "Karmelitka", "Olyshivka", "Olevs’k", "Olesko", "Oleksandriya", "Oleksandrivka", "Oktyabr’skoye", "Odes’ka Oblast’", "Odessa", "Ochakiv", "Obukhiv", "Obroshyne", "Obodivka", "Obertyn", "Nuyno", "Novyi Yarychiv", "Novyy Svit", "Novyy Svit", "Novy Svet", "Novyy Starodub", "Novyy Sarabuz", "Novi Troyany", "Novi Sanzhary", "Novi Bilokorovychi", "Novyy Chudniv", "Novyy Buh", "Nove Davydkovo", "Novovorontsovka", "Novovolyns’k", "Novovasylivka", "Novo-Uspenka", "Novoulyanovka", "Novoukrayinka", "Novotroyits’ke", "Novoselytsya", "Novoselytsya", "Novopskov", "Novo-Poznyaki", "Novopolye", "Novopokrovka", "Novopokrovka", "Novo-Nikolayevskiy", "Paryz’ke", "Novomykolayivka", "Novomykolayivka", "Novomoskovs’k", "Novomyrhorod", "Novoivanovka", "Novohrad-Volynskyi", "Novohrodivka", "Novohryhorivka", "Novo-Grigor’yevka", "Novofëdorovka", "Novofedorivka", "Novobohdanivka", "Novoazovs'k", "Novoaydar", "Novoarkhanhel’s’k", "Novooleksiyivka", "Novooleksandrivka", "Novytsya", "Novhorod-Sivers’kyy", "Novhorodka", "Nove-Misto", "Nova Vodolaha", "Nova Praha", "Nova Odesa", "Nova Mayachka", "Nova Kakhovka", "Ivanovka", "Nova Darnytsya", "Nova Borova", "Nova Ushytsya", "Nosivka", "Nyzy", "Nizhyn", "Nyzhnya Krynka", "Nyzhnya Duvanka", "Nyzhnyanka", "Nyzhni Sirohozy", "Nizhniye Partizany", "Nizhniy Chorgun’", "Solnechnoselye", "Nizhnegorskiy", "Nizhnedneprovsk", "Nikopol", "Mykilska Slobidka", "Mykolaypillya", "Nikolayevka", "Mykolayivka", "Mykolayivka", "Nikolayevka", "Mykolayivka", "Mykolayivka", "Nikiforovskiy", "Netishyn", "Nesteliyivka", "Nestervarka", "Neresnytsya", "Nemyriv", "Nelipyno", "Nedryhayliv", "Nebyliv", "Nebelytsya", "Navaria", "Nauchny", "Nasypnoe", "Narodychi", "Malovidnoye", "Nadychi", "Nadvirna", "Mytnytsia", "Mysovoe", "Mykolayivs’ka Oblast’", "Mykolaiv", "Mykolayiv", "Murovani Kurylivtsi", "Murovane", "Mukacheve", "Mramornoye", "Mospyne", "Moshny", "Morskoye", "Morshyn", "Morozivs’ke", "Morozivs’ke", "Monastyryshche", "Molodohvardiys’k", "Molodiya", "Molodizhne", "Molodyozhnoye", "Mokroye", "Mohyliv-Podilskyi", "Mogilëv", "Mlyniv", "Mliiv", "Mizoch", "Miusyns’k", "Miskhor", "Myronivka", "Myronivka", "Mirny", "Myrhorod", "Mynay", "Milove", "Mikulintsy", "Mikhaylovka", "Mykhaylivka", "Mykhaylivka", "Myhove", "Myhiya", "Mezhvodnoye", "Chudey", "Mizhhirya", "Mezhgorye", "Mezhova", "Merefa", "Mena", "Melitopol", "Melioratyvne", "Melekyne", "Mekenziyevi Hory", "Medzhybizh", "Medvedevka", "Medenychi", "Mayskoye", "Mayorivka", "Mayaky", "Matrosskaya Sloboda", "Matveyevka", "Matviyivka", "Matiasa", "Massandra", "Mashivka", "Mar’yevka", "Martusivka", "Marshintsy", "Markivtsi", "Markivka", "Markova", "Mariupol", "Mariupol", "Mar'yinka", "Marhanets’", "Mar’yanovka", "Manyava", "Manevychi", "Manchzhuriya", "Manchenky", "Mamut", "Malyy Tokmak", "Maly Mayak", "Malyy Fontan", "Malorechenskoye", "Malokaterynivka", "Malokakhovka", "Malyn", "Mala Vyska", "Mala Tokmachka", "Mala Danylivka", "Mala Bilozerka", "Makiyivka", "Makariv", "Mahdalynivka", "Lyubotyn", "Liuboml", "Lyubymivka", "Lyubymivka", "Lyubech", "Liubar", "Lysianka", "Lysa Hora", "L’vivs’ka Oblast’", "Lviv", "Luzhany", "Lutuhyne", "Lutsk", "Lukiv", "Luhans’ka Oblast’", "Luhansk", "Lugovoye", "Luhyny", "Lug", "Luchistoye", "Lubny", "Lozovoye", "Lozova", "Lozovatka Vtoraya", "Lozuvatka", "Lozno-Oleksandrivka", "Lopukhiv", "Lopatyn", "Lokhvytsya", "Lokachi", "Lyubashivka", "Livadia", "Lityn", "Liski", "Lysychovo", "Lysychans’k", "Lipovaya Rosheha", "Lypova Dolyna", "Lypnyazhka", "Lypcha", "Lymanske", "Lyman", "Lykhivka", "Letychiv", "Lisovi Sorochyntsi", "Lesnaya", "Lesnoye", "Lenino", "Lenina", "Lebedyn", "Lazurne", "Lazi", "Lazeshchyna", "Laspi", "Lanivtsi", "Lanchyn", "Lagernoye", "Ladyzhyn", "Ladan", "Kyiv Oblast", "Misto Kyyiv", "Kyiv", "Kvasy", "Kuznetsovsk", "Kuybysheve", "Kuibyshevo", "Kuty", "Verkhnyaya Kutuzovka", "Kuteynykove", "Kushuhum", "Kushnytsya", "Kurpaty", "Kurortnoye", "Kurenëvka", "Kurakhovo", "Kupjansk", "Kulynychi", "Kulykivka", "Kulykiv", "Kulebivka", "Kukhmisterskaya Sloboda", "Kudrino", "Kryzhanivka", "Kryvyi Rih", "Sanatoriy Kryms’ke Prymor”ya", "Autonomous Republic of Crimea", "Kruty", "Krucha", "Urochishche Krucha", "Krolevets’", "Kryve Ozero", "Kryva Hora", "Krivaya Balka", "Kryva", "Krinichki", "Krinichnaya", "Krynychky", "Urochyshche Kripke", "Kripens’kyy", "Krenychi", "Tatariv", "Kreminna", "Kremenets", "Kremenchuk", "Krasnyy Shlyakh", "Krasnyi Mak", "Krasnyy Luch", "Lyman", "Krasnyy Kut", "Chervoni Partyzany", "Krasnyy", "Krasnoye Znamya", "Krasnoye Selo", "Krasne", "Krasne", "Krasnotorka", "Krasnosyolovka", "Krasnosilka", "Krasnopillya", "Krasnopeshchernoe", "Krasnoperekops’k", "Krasnopavlivka", "Krasnokuts’k", "Krasnokamenka", "Krasnogvardeyskoye", "Krasnohrad", "Krasnohorivka", "Teple", "Sorokyne", "Krasnoarmeyskoye", "Pokrovsk", "Krasna Zor'ka", "Krasna", "Krasyliv", "Kramators’k", "Kozova", "Kozhanka", "Kozelets’", "Kivsharivka", "Kovel", "Kotsyubyns’ke", "Podil’s’k", "Kotel’va", "Kostyantynivka", "Kostryzhivka", "Kostopil’", "Kosiv", "Kosmach", "Kosmach", "Koryukivka", "Korsun-Shevchenkivskyi", "Korotych", "Korostyshiv", "Korosten’", "Korop", "Korolevo", "Kornyn", "Korets", "Koreiz", "Kopyliv", "Kopychyntsi", "Kopayhorod", "Kopani", "Kostyantynivka", "Kostyantynivka", "Pasechnoye", "Konotop", "Slobozhans’ke", "Kompaniyivka", "Obil'ne", "Komarivka", "Komarno", "Kolubayevtsy", "Kolonshchyna", "Koloniya Zastav’ye", "Kolomyia", "Kolomak", "Kolodenka", "Kolochava", "Kolkhoznoye", "Kulevcha", "Kodyma", "Kodra", "Kochetok", "Kocheriv", "Kobyzhcha", "Kobleve", "Kobelyaky", "Knyazhichi", "Klyuchevaya", "Klishkivtsi", "Klimashëvka", "Klevan", "Klenovyy", "Klembivka", "Klavdiyevo-Tarasove", "Kivertsi", "Urochishche Kislsikoye", "Kirovs’ke", "Kirovskoye", "Kirovskoye", "Kirovs’k", "Kirovohrads’ka Oblast’", "Kropyvnytskyi", "Kirove", "Khutory", "Kyrylivka", "Kyrykivka", "Kiliya", "Khyriv", "Khutor Pen’kovatoye", "Naumivs’ke", "Khmil’", "Kalynivka", "Kalynivka", "Khomyne", "Khust", "Khrystynivka", "Abrykosivka", "Khotiv", "Khotyn", "Khorostkiv", "Khorosheve", "Khorol", "Kholodna Balka", "Kholmy", "Khodoriv", "Khmelnytskyi", "Khmel’nyts’ka Oblast’", "Khmel’nitskoye", "Khmilnyk", "Khymchyn", "Khersons’ka Oblast’", "Kherson", "Tylovoye", "Khartsyz’k", "Kharkivs’ka Oblast’", "Kharkiv", "Kerleut", "Kerch", "Kel’mentsi", "Kehychivka", "Kazil’", "Kozyatyn", "Kazanka", "Kozacha Lopan’", "Kozachi Laheri", "Kaydaki", "Katyuzhanka", "Katerynopil", "Karnaukhivka", "Vil’khuvatka", "Karlivka", "Soledar", "Karapyshi", "Arbuzovka", "Kapitanivka", "Kaniv", "Komysh-Zorya", "Komyshnya", "Kamyshevka Vtoraya", "Komyshuvakha", "Komyshany", "Kamianets-Podilskyi", "Yanchekrak", "Kamennyye Potoki", "Millerovo", "Kamin-Kashyrskyi", "Kamenka-Na-Dnepre", "Kamianka-Buzka", "Kamianka", "Kalush", "Kalyta", "Kalyny", "Kalinova Popasnaya", "Kalynivka", "Kalyniv", "Bohdanivka", "Kalcheva", "Kalanchak", "Mirnoye", "Kakhovka", "Kayiry", "Kaharlyk", "Kadubivtsi", "Kacha", "Izyum", "Izyaslav", "Izobil’noye", "Izmayil", "Yizhivtsi", "Iza", "Novoivanivs’ke", "Ivanivka", "Ivanivka", "Ivano-Frankivs’ka Oblast’", "Ivano-Frankivsk", "Ivan’kov", "Ivankiv", "Ivanenki", "Istoki", "Ispas", "Sanatoriy Issary", "Irshava", "Irpin", "Dolyns’ke", "Imshana", "Imeni Lenina", "Artema", "Ilovays’k", "Chornomors’k", "Ilarionove", "Illintsi", "Il’ichëvskoye", "Il’ichëvka", "Ichnya", "Horodok", "Horlivka", "Hlyboka", "Hlukhiv", "Hvizd", "Hvardiiske", "Huty", "Gutertal’", "Husiatyn", "Gurzuf", "Hulyaypole", "Guchok", "Hubynykha", "Grushevka", "Hryshkivtsi", "Hrymayliv", "Hryhorivka", "Gresovskiy", "Hrebinky", "Hrebinka", "Hradyz’k", "Hostomel", "Hoshcha", "Horyanivs’ke", "Hirs’ke", "Horokhiv", "Horodok", "Horodnya", "Horodnytsya", "Horodnye", "Horodyshche", "Horodyshche", "Gorodishche", "Horodenka", "Hirnyk", "Hornostayivka", "Sanatoriy Gornaya Zdravnitsa", "Gorki", "Gorishni Plavni", "Horinchovo", "Goncharovka", "Goncharova", "Holubyne", "Golubinka", "Golta", "Holovyne", "Hołoby", "Hola Prystan’", "Gogulina", "Hnarivs’ke", "Hnivan’", "Hnidyn", "Glubokiy Yar", "Hlobyne", "Hlevakha", "Heniches’ka Hirka", "Heniches’k", "General’skoye", "Hayvoron", "Haisyn", "Gavrilovka", "Gaspra", "Halych", "Hadyach", "Zakharivka", "Shtormovoye", "Partenit", "Frunzens’kyy", "Frunze", "Frunze", "Fruktovoye", "Foros", "Fontanka", "Fersmanovo", "Feodosiya", "Fastiv", "Fasivochka", "Urochishche Eski-Yurt", "Eskhar", "Gornoye", "Energodar", "Dzvinogrud", "Dzvinogorod an der Strypa", "Druzhnoye", "Dzhankoy", "Sukhorechye", "Toretsk", "Tarasovka", "Dymer", "Dvorichna", "Dunaivtsi", "Duliby", "Dudchany", "Dubrovytsya", "Dubove", "Dubno", "Dublyany", "Dublyany", "Druzhba", "Druzhba", "Drovyanka", "Drohobych", "Dravtsi", "Drahovo", "Drabiv", "Dovbysh", "Doroshivka", "Donets’ka Oblast’", "Donetsk", "Domanivka", "Dolyna", "Sanatoriy Dolossy", "Dolyns'ka", "Dovhe", "Dokuchayevs’k", "Dobryanka", "Dobroye Utro", "Dobroye", "Dobropillya", "Dnipropetrovska Oblast'", "Dnipro", "Kamianske", "Dnipryany", "Dniprovka", "Dniprorudne", "Dmytrivka", "Dmytrivka", "Dmitriyevka", "Dluga-Strona", "Oleksandriys’ke", "Dmytrivka", "Dykan’ka", "Desna", "Derhachi", "Derazhnya", "Denisovka", "Demidovka", "Delyatyn", "Dihtyari", "Debal’tseve", "Davydivka", "Dashiv", "Darnytsia Raion", "Danilovka", "Danilovka", "Danylo-Ivanivka", "Dal’niye Kamyshi", "Kamyshly", "Dalëkiy", "Dachnoye", "Chutove", "Chulakivka", "Chuhuyiv", "Chudniv", "Chortkiv", "Chornobyl", "Chopovychi", "Chop", "Ataman’", "Chokolivka", "Chisten’koye", "Chynadiyovo", "Chyhyryn", "Chervonyy Pakhar’", "Stalino", "Yesman’", "Chervone", "Chervonopartyzans’k", "Chervonohryhorivka", "Chervonohrad", "Radyvyliv", "Chervona Sloboda", "Chervonyy Shakhtar", "Chortomlyk", "Chernyatyn", "Chornyanka", "Chernyakovo", "Cherniakhiv", "Chornukhy", "Chernoslivka", "Chernopolye", "Chernomorskoye", "Chornoliztsi", "Chornobayivka", "Chornobay", "Cherniyiv", "Chernivtsi", "Chernivtsi Oblast’", "Chernihivs’ka Oblast’", "Chernihiv", "Chernivtsi", "Chernelytsya", "Cherkasy", "Cherkas’ka Oblast’", "Chekhove", "Chasiv Yar", "Chaplynka", "Chapayeve", "Kalynove", "Viytivka", "Chapayevka", "Chahor", "Bytkiv", "Bystrytsya", "Bykivka", "Buzova", "Bushtyno", "Buryn’", "Burshtyn", "Burchak", "Budy", "Buchach", "Bucha", "Bucha", "Bryukhovychi", "Bryanka", "Brusyliv", "Brovary", "Broska", "Broshniv-Osada", "Brody", "Brylivka", "Bratslav", "Brailiv", "Boyarka", "Boyany", "Nikita", "Borzna", "Bortnychi", "Borshchiv", "Borova", "Borova", "Boromlya", "Borodianka", "Borodino", "Boryspil’", "Boryslav", "Borangar", "Bol’shoye Sadovoye", "Bilshivtsi", "Velikiye Troyany", "Velyka Balka", "Bolhrad", "Bolekhiv", "Bohuslav", "Bohorodchany", "Bohodukhiv", "Bohdanivka", "Bohdan", "Bobyanskoye", "Bobrovytsya", "Bibrka", "Bobrytsya", "Bobovo", "Blyznyuky", "Blizhnye Kamyshi", "Blizhneye", "Blizhnegorodskoye", "Blahodatne", "Blahodatne", "Nayman", "Biryukove", "Birjukowo", "Bilhorod-Dnistrovskyi", "Bila Tserkva", "Bezimenne", "Bezlyudivka", "Beshuyskiye Kopi", "Donskoye", "Besharan’", "Bershad", "Beryslav", "Berezovo", "Berezivka", "Berezivka", "Bereznyky", "Bereznehuvate", "Berezna", "Berezyne", "Бережани", "Berezanka", "Berezan’", "Berestechko", "Berehove", "Beregovoye", "Berehomet", "Berdychiv", "Berdyans’ke", "Berdyansk", "Belz", "Bili Oslavy", "Bilyayivka", "Bilyari", "Bilozerka", "Bile", "Bilovods'k", "Urochishche Belostadnoye", "Bilopillya", "Bilokurakyne", "Belokamenskoye", "Inkerman", "Bilohirsk", "Bilohorivka", "Bilohorodka", "Bilky", "Bilyts’ke", "Belitskiy", "Belichi", "Belaya Skala", "Bila Krynytsya", "Belaya", "Bekhtery", "Bazaliya", "Baturyn", "Sanatoriy Batylyman", "Batal’noye", "Bashtanovka", "Bashtanka", "Baryshivka", "Barvinkove", "Barteniyivka", "Barmashovo", "Baranivka", "Bar", "Banyliv", "Balta", "Balovnoye", "Balky", "Balakliya", "Balaklava", "Balabyne", "Bakhmach", "Bakhchysarai", "Baglikovo", "Baherove", "Babyntsi", "Babintsy", "Babanka", "Ayvazovskaya", "Ayanskiy Istochnik", "Avtozavodskiy Rayon", "Avdiyivka", "Auly", "Altestove", "Ataki", "Kordon Asport", "Askaniya-Nova", "-", "Artsyz", "Artëmovskiy Rayon", "Bakhmut", "Artemivs’k", "Artemivka", "Artek", "Armyansk", "Armutluk", "Arbuzynka", "Apostolove", "Antratsyt", "Antoniny", "Andrushivka", "Ananyiv", "Amvrosiyivka", "Amurskoye", "Alushta", "Alupka", "Alsu", "Oleksiyevo-Druzhkivka", "Aleksandrovka", "Oleksandrivka", "Oleksandrivka", "Aleksandrowka", "Aleksandrinka", "Alchevs’k", "Alabash Konrat", "Yakymivka", "Akikat", "Okhtyrka", "Aheyivka", "Aeroflotskiy", "Adzhamka", "Malynivka", "Mykhaylivka", "Novyy Koyash", "Dzhardzhava", "Chernyaky", "Imeni Frunze", "Savkino", "Chernihivs’ke", "Oddykhne", "Novo Ivanovka", "Vasil’yevo-Grigor’yevskiy", "Privol’ye", "Kabachki", "Kooperatorka", "Kuznetsovka", "Stupakove", "Slavyanoserbsk", "Butivka", "Nadtochiyi", "Sinolitsovka", "Selektsiyne", "Kysle", "Losevo", "Chunikhin", "Movchany", "Sorokyne", "Yehorove", "Tsementna Slobidka", "Kopashnovo", "Narkevychi", "Kirove", "Hromy", "Orekhovo", "Okny", "Kuchurhan", "Smyga", "Tayirove", "Teplodar", "Tavriys’k", "Horishni Plavni", "Sokol’nyky", "Ivanivka", "Shatylivka", "Dal'nya Zhuravlivka", "Il’icha", "Shevchenka", "Slavutych", "Orzhiv", "Krasnogorovka", "Priyatnoye Svidanye", "Molochnoye", "Komsomol’skoye", "Malen’koye", "Shyroke", "Novoandriyivka", "Kordon Marte", "Tretiy Samostriy", "Lazarevka", "Druzhne", "Rozovy", "Lavanda", "Krasny Partizan", "Poltavka", "Yantarne", "Blizhneye", "Oktyabrs’kyy", "Dubrovka", "Otradnoye", "Timofeyevka", "Konstantinovka", "Izumrudnoye", "Pavlivka", "Vetvistoye", "Maloye Sadovoye", "Nizhnaya Golubinka", "Aromat", "Chonhar", "Shchorsivka", "Shkol’noye", "Topoli", "Kochergino", "Samokhvalovo", "Sevastyanovka", "Aromatnoye", "Malovydne", "Zheleznodorozhnoye", "Pirogovka", "Semarenka", "Zaliznychne", "Novyy Trud", "Sal’kove", "Krasnoye Znamya", "Moskalenka", "Rivne", "Kommunarskoye", "Novoyefremivka", "Druzhba", "Denyshi", "Stepove", "Scholkine", "Yuzhnoukrains'k", "Prohres", "Hora", "Novyi Svit", "Голубинка"]

const openWeatherMapApiKey = 'd436419a3fbd58737f76a92c97f257e0';

const intervalController = {
    repeatableTaskIds: [],
    registerRepeatableTaskId: function (id) { this.repeatableTaskIds.push(id) },
    resetRepeatableTasks: function () {
        this.repeatableTaskIds.forEach(id => clearInterval(id))
        this.repeatableTaskIds = []
    }
}

// time
const time = document.getElementById("time");
time.addEventListener('click', function () {
    let content = document.getElementById("content")
    content.innerHTML = '';
    intervalController.resetRepeatableTasks();
    let divTime = content.appendChild(document.createElement('div'));
    divTime.id = "timeSection"
    printTime();
    id = setInterval(printTime, 1000);
    intervalController.registerRepeatableTaskId(id);
})

function printTime() {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById('timeSection').innerHTML = hours + ":" + minutes + ":" + seconds;
};

//weather
const weather = document.getElementById('weather')

weather.addEventListener('click', function () {
    intervalController.resetRepeatableTasks();
    printWeather()
})

function printWeather() {
    document.getElementById('content').innerHTML = '';

    let divWeather = document.createElement('div');
    divWeather.id = "weatherSection";
    let input = divWeather.appendChild(document.createElement('input'));
    input.id = "inputWeather"
    let datalist = divWeather.appendChild(document.createElement('datalist'));

    let weatherResult = document.createElement('div');
    divWeather.appendChild(weatherResult);

    datalist.id = 'citiesCompletionList';
    input.setAttribute('list', datalist.id);

    const content = document.getElementById('content');
    content.appendChild(divWeather)

    input.addEventListener('keyup', function (event) {
      
            if (/^[a-z]$/i.test(event.key) || event.key === "Backspace" || event.key === "Delete") {
                console.log('event', event)
                let option = "";
                for (let i = 0; i < uaCities.length; i++) {
                    if (uaCities[i].toUpperCase().startsWith(input.value.toUpperCase()) == true) {
                        option += "<option value='" + uaCities[i] + "' />";
                    }
                }
                datalist.innerHTML = option;
            }
    })


    input.addEventListener('keyup', function (event) {
        if (event.key === 'Enter' && isValidCityName(input.value, uaCities)) {
            let inputValue = input.value;
    
            
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${openWeatherMapApiKey}`)
                .then((response) => {
                    return response.json();
                })
                .then(data => {
                   
                  input.value = '';
                   weatherResult.innerHTML = '';
                  
                    let divWeatherName = document.createElement('div');
                    divWeatherName.id = "divWeatherNameCity";
                    divWeatherName.innerHTML = data.name;
                    weatherResult.appendChild(divWeatherName);

                    let divWeatherTemperature = document.createElement('div');
                    divWeatherTemperature.id = 'divWeatherTemperatureCity';
                    divWeatherTemperature.innerHTML =  Math.round(data.main.temp - 273) + "&deg";
                    divWeatherName.appendChild(divWeatherTemperature);

                    let divWeatherImg = document.createElement('div');
                    divWeatherImg.id = "divWeatherImgCity";
                    console.log('icon', data.weather[0]['icon'])
                    divWeatherImg.innerHTML = `<img src="./icon/${data.weather[0]['icon']}@2x.png">`
                    divWeatherTemperature.appendChild(divWeatherImg);


                    let divWeatherDescription = document.createElement('div');
                    divWeatherDescription.id = 'divWeatherDescriptionCity';
                    divWeatherDescription.innerHTML = data.weather[0]['description'];
                    divWeatherImg.appendChild(divWeatherDescription);

                })
        }
    })
}

function isValidCityName(cityName, uaCities) {
    for (let i = 0; i < uaCities.length; i++) {
        if (uaCities[i] == cityName) {
            return true
        }
    }
    return false
}