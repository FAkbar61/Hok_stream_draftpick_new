// ===== HERO DATA =====
const heroes = [
    { name: 'Agudo', img: 'Assets/HeroPick/Agudo.png' },
    { name: 'Alessio', img: 'Assets/HeroPick/Alessio.png' },
    { name: 'Allain', img: 'Assets/HeroPick/Allain.png' },
    { name: 'Angela', img: 'Assets/HeroPick/Angela.png' },
    { name: 'Arke', img: 'Assets/HeroPick/Arke.png' },
    { name: 'Arli', img: 'Assets/HeroPick/Arli.png' },
    { name: 'Arthur', img: 'Assets/HeroPick/Arthur.png' },
    { name: 'Ata', img: 'Assets/HeroPick/Ata.png' },
    { name: 'Athena', img: 'Assets/HeroPick/Athena.png' },
    { name: 'Augran', img: 'Assets/HeroPick/Augran.png' },
    { name: 'Biron', img: 'Assets/HeroPick/Biron.png' },
    { name: 'Butterfly', img: 'Assets/HeroPick/Butterfly.png' },
    { name: 'Cai Yan', img: 'Assets/HeroPick/Cai Yan.png' },
    { name: 'Charlotte', img: 'Assets/HeroPick/Charlotte.png' },
    { name: 'Chicha', img: 'Assets/HeroPick/Chicha.jpeg' },
    { name: 'Cirrus', img: 'Assets/HeroPick/Cirrus.png' },
    { name: 'Consort Yu', img: 'Assets/HeroPick/Consort Yu.png' },
    { name: 'Da Qiao', img: 'Assets/HeroPick/Da Qiao.png' },
    { name: 'Daji', img: 'Assets/HeroPick/Daji.png' },
    { name: 'Dharma', img: 'Assets/HeroPick/Dharma.png' },
    { name: 'Di Renjie', img: 'Assets/HeroPick/Di Renjie.png' },
    { name: 'Dian Wei', img: 'Assets/HeroPick/Dian Wei.png' },
    { name: 'Diaochan', img: 'Assets/HeroPick/Diaochan.png' },
    { name: 'Dolia', img: 'Assets/HeroPick/Dolia.png' },
    { name: 'Donghuang', img: 'Assets/HeroPick/Donghuang.png' },
    { name: 'Dr Bian', img: 'Assets/HeroPick/Dr Bian.png' },
    { name: 'Dun', img: 'Assets/HeroPick/Dun.png' },
    { name: 'Dyadia', img: 'Assets/HeroPick/Dyadia.png' },
    { name: 'Erin', img: 'Assets/HeroPick/Erin.png' },
    { name: 'Fang', img: 'Assets/HeroPick/Fang.png' },
    { name: 'Frost', img: 'Assets/HeroPick/Frost.png' },
    { name: 'Fuzi', img: 'Assets/HeroPick/Fuzi.png' },
    { name: 'Ganmo', img: 'Assets/HeroPick/Ganmo.png' },
    { name: 'Gao', img: 'Assets/HeroPick/Gao.png' },
    { name: 'Garo', img: 'Assets/HeroPick/Garo.png' },
    { name: 'Guan Yu', img: 'Assets/HeroPick/Guan Yu.png' },
    { name: 'Guiguzi', img: 'Assets/HeroPick/Guiguzi.png' },
    { name: 'Han Xin', img: 'Assets/HeroPick/Han Xin.png' },
    { name: 'Haya', img: 'Assets/HeroPick/Haya.jpeg' },
    { name: 'Heino', img: 'Assets/HeroPick/Heino.png' },
    { name: 'Hou Yi', img: 'Assets/HeroPick/Hou Yi.png' },
    { name: 'Huang Zhong', img: 'Assets/HeroPick/Huang Zhong.png' },
    { name: 'Jing', img: 'Assets/HeroPick/Jing.png' },
    { name: 'Kaizer', img: 'Assets/HeroPick/Kaizer.png' },
    { name: 'Kongming', img: 'Assets/HeroPick/Kongming.png' },
    { name: 'Kui', img: 'Assets/HeroPick/Kui.png' },
    { name: 'Lady Sun', img: 'Assets/HeroPick/Lady Sun.png' },
    { name: 'Lady Zhen', img: 'Assets/HeroPick/Lady Zhen.png' },
    { name: 'Lam', img: 'Assets/HeroPick/Lam.png' },
    { name: 'Lanling', img: 'Assets/HeroPick/Lanling.png' },
    { name: 'Lapu Lapu', img: 'Assets/HeroPick/Lapu Lapu.jpeg' },
    { name: 'Li Bai', img: 'Assets/HeroPick/Li Bai.png' },
    { name: 'Li Xin', img: 'Assets/HeroPick/Li Xin.png' },
    { name: 'Lian Po', img: 'Assets/HeroPick/Lian Po.png' },
    { name: 'Liang', img: 'Assets/HeroPick/Liang.png' },
    { name: 'Liu Bang', img: 'Assets/HeroPick/Liu Bang.png' },
    { name: 'Liu Bei', img: 'Assets/HeroPick/Liu Bei.png' },
    { name: 'Liu Shan', img: 'Assets/HeroPick/Liu Shan.png' },
    { name: 'Loong', img: 'Assets/HeroPick/Loong.png' },
    { name: 'Lu Bu', img: 'Assets/HeroPick/Lu Bu.png' },
    { name: 'Luara', img: 'Assets/HeroPick/Luara.png' },
    { name: 'Luban No.7', img: 'Assets/HeroPick/Luban No.7.png' },
    { name: 'Luna', img: 'Assets/HeroPick/Luna.png' },
    { name: 'Mai Shiranui', img: 'Assets/HeroPick/Mai Shiranui.png' },
    { name: 'Marco Polo', img: 'Assets/HeroPick/Marco Polo.png' },
    { name: 'Mayene', img: 'Assets/HeroPick/Mayene.png' },
    { name: 'Meng Ya', img: 'Assets/HeroPick/Meng Ya.png' },
    { name: 'Menki', img: 'Assets/HeroPick/Menki.png' },
    { name: 'Mi Yue', img: 'Assets/HeroPick/Mi Yue.png' },
    { name: 'Milady', img: 'Assets/HeroPick/Milady.png' },
    { name: 'Ming', img: 'Assets/HeroPick/Ming.png' },
    { name: 'Mozi', img: 'Assets/HeroPick/Mozi.png' },
    { name: 'Mulan', img: 'Assets/HeroPick/Mulan.png' },
    { name: 'Musashi', img: 'Assets/HeroPick/Musashi.png' },
    { name: 'Nakoruru', img: 'Assets/HeroPick/Nakoruru.png' },
    { name: 'Nezha', img: 'Assets/HeroPick/Nezha.png' },
    { name: 'Nuwa', img: 'Assets/HeroPick/Nuwa.png' },
    { name: 'Pei', img: 'Assets/HeroPick/Pei.png' },
    { name: 'Sakeer', img: 'Assets/HeroPick/Sakeer.png' },
    { name: 'Shangguan', img: 'Assets/HeroPick/Shangguan.png' },
    { name: 'Shi', img: 'Assets/HeroPick/Shi.png' },
    { name: 'Shouyue', img: 'Assets/HeroPick/Shouyue.png' },
    { name: 'Sima Yi', img: 'Assets/HeroPick/Sima Yi.png' },
    { name: 'Sun Bin', img: 'Assets/HeroPick/Sun Bin.png' },
    { name: 'Sun Ce', img: 'Assets/HeroPick/Sun Ce.png' },
    { name: 'Ukyo Tachibana', img: 'Assets/HeroPick/Ukyo Tachibana.png' },
    { name: 'Wukong', img: 'Assets/HeroPick/Wukong.png' },
    { name: 'Wuyan', img: 'Assets/HeroPick/Wuyan.png' },
    { name: 'Xiang Yu', img: 'Assets/HeroPick/Xiang Yu.png' },
    { name: 'Xiao Qiao', img: 'Assets/HeroPick/Xiao Qiao.png' },
    { name: 'Xuance', img: 'Assets/HeroPick/Xuance.png' },
    { name: 'Yang Jian', img: 'Assets/HeroPick/Yang Jian.png' },
    { name: 'Yao', img: 'Assets/HeroPick/Yao.png' },
    { name: 'Yaria', img: 'Assets/HeroPick/Yaria.png' },
    { name: 'Ying', img: 'Assets/HeroPick/Ying.png' },
    { name: 'Yixing', img: 'Assets/HeroPick/Yixing.png' },
    { name: 'Yuhuan', img: 'Assets/HeroPick/Yuhuan.png' },
    { name: 'Zhang Fei', img: 'Assets/HeroPick/Zhang Fei.png' },
    { name: 'Zhou Yu', img: 'Assets/HeroPick/Zhou Yu.png' },
    { name: 'Zhuangzi', img: 'Assets/HeroPick/Zhuangzi.png' },
    { name: 'Zilong', img: 'Assets/HeroPick/Zilong.png' },
    { name: 'Ziya', img: 'Assets/HeroPick/Ziya.png' },
];

// ===== ITEMS DATA (107 Items from hokstats.gg) =====
// ===== ITEMS DATA (107 Items from hokstats.gg) =====
const gameItems = [
    { id: '1351', name: 'Amble - Winter', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1351.png' },
    { id: '1227', name: 'Ardent Dominion', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1227.png' },
    { id: '1237', name: 'Augur\'s Word', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1237.png' },
    { id: '1137', name: 'Axe of Torment', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1137.png' },
    { id: '1321', name: 'Belt of Might', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1321.png' },
    { id: '1331', name: 'Blazing Cape', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1331.png' },
    { id: '1222', name: 'Blood Clan\'s Grimoire', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1222.png' },
    { id: '1328', name: 'Blood Rage', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1328.png' },
    { id: '1158', name: 'Bloodsoul', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1158.png' },
    { id: '1132', name: 'Bloodweeper', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1132.png' },
    { id: '1426', name: 'Boots of Deftness', type: 4, category: 'movement', img: 'https://hokstats.gg/items/1426.png' },
    { id: '1425', name: 'Boots of Dexterity', type: 4, category: 'movement', img: 'https://hokstats.gg/items/1425.png' },
    { id: '1421', name: 'Boots of Fortitude', type: 4, category: 'movement', img: 'https://hokstats.gg/items/1421.png' },
    { id: '1422', name: 'Boots of Resistance', type: 4, category: 'movement', img: 'https://hokstats.gg/items/1422.png' },
    { id: '1424', name: 'Boots of the Arcane', type: 4, category: 'movement', img: 'https://hokstats.gg/items/1424.png' },
    { id: '1423', name: 'Boots of Tranquility', type: 4, category: 'movement', img: 'https://hokstats.gg/items/1423.png' },
    { id: '1244', name: 'Breakthrough Robe', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1244.png' },
    { id: '1323', name: 'Clandestine Cape', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1323.png' },
    { id: '1312', name: 'Cloth Jerkin', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1312.png' },
    { id: '1154', name: 'Cloud Piercer', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1154.png' },
    { id: '1711', name: 'Crimson Shadow', type: 7, category: 'support', img: 'https://hokstats.gg/items/1711.png' },
    { id: '1723', name: 'Crimson Shadow - Howl', type: 7, category: 'support', img: 'https://hokstats.gg/items/1723.png' },
    { id: '1737', name: 'Crimson Shadow - Radiance', type: 7, category: 'support', img: 'https://hokstats.gg/items/1737.png' },
    { id: '1721', name: 'Crimson Shadow - Redemption', type: 7, category: 'support', img: 'https://hokstats.gg/items/1721.png' },
    { id: '1747', name: 'Crimson Shadow - Starspring', type: 7, category: 'support', img: 'https://hokstats.gg/items/1747.png' },
    { id: '1338', name: 'Cuirass of Savagery', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1338.png' },
    { id: '1317', name: 'Cuirass of Swiftness', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1317.png' },
    { id: '1112', name: 'Dagger', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1112.png' },
    { id: '1353', name: 'Dawnlight', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1353.png' },
    { id: '1155', name: 'Daybreaker\'s Virtue', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1155.png' },
    { id: '1128', name: 'Deepfrost Siege', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1128.png' },
    { id: '1125', name: 'Demonsbane', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1125.png' },
    { id: '1127', name: 'Destiny', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1127.png' },
    { id: '1126', name: 'Doomsday', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1126.png' },
    { id: '1534', name: 'Dragon\'s Rage', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1534.png' },
    { id: '1242', name: 'Enigma - Moon Goddess', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1242.png' },
    { id: '1133', name: 'Eternity Blade', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1133.png' },
    { id: '1334', name: 'Eye of the Phoenix', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1334.png' },
    { id: '1341', name: 'Frigid Charge', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1341.png' },
    { id: '1324', name: 'Frosthold Targe', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1324.png' },
    { id: '13310', name: 'Frostscar\'s Embrace', type: 3, category: 'defense', img: 'https://hokstats.gg/items/13310.png' },
    { id: '1234', name: 'Frozen Breath', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1234.png' },
    { id: '1532', name: 'Giant\'s Grip', type: 5, category: 'jungle', img: 'https://hokstats.gg/items/1532.png' },
    { id: '1336', name: 'Glacial Buckler', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1336.png' },
    { id: '1728', name: 'Golden Blade', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1728.png' },
    { id: '1221', name: 'Grand Staff', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1221.png' },
    { id: '1714', name: 'Guardian', type: 7, category: 'support', img: 'https://hokstats.gg/items/1714.png' },
    { id: '1754', name: 'Guardian - Radiance', type: 7, category: 'support', img: 'https://hokstats.gg/items/1754.png' },
    { id: '1724', name: 'Guardian - Redemption', type: 7, category: 'support', img: 'https://hokstats.gg/items/1724.png' },
    { id: '1725', name: 'Guardian - Starspring', type: 7, category: 'support', img: 'https://hokstats.gg/items/1725.png' },
    { id: '1521', name: 'Guerrilla Machete', type: 5, category: 'jungle', img: 'https://hokstats.gg/items/1521.png' },
    { id: '1156', name: 'Haste - Sunpool', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1156.png' },
    { id: '1226', name: 'Holy Grail', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1226.png' },
    { id: '1511', name: 'Hunting Knife', type: 5, category: 'jungle', img: 'https://hokstats.gg/items/1511.png' },
    { id: '1157', name: 'Immovable - Sky Dome', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1157.png' },
    { id: '1240', name: 'Insatiable Tome', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1240.png' },
    { id: '1111', name: 'Iron Sword', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1111.png' },
    { id: '1701', name: 'Knowledge Gem', type: 7, category: 'support', img: 'https://hokstats.gg/items/1701.png' },
    { id: '1411', name: 'Lightfoot Shoes', type: 4, category: 'movement', img: 'https://hokstats.gg/items/1411.png' },
    { id: '1347', name: 'Longnight Guardian', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1347.png' },
    { id: '1235', name: 'Mask of Agony', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1235.png' },
    { id: '1134', name: 'Master Sword', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1134.png' },
    { id: '1124', name: 'Meteor', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1124.png' },
    { id: '13211', name: 'Mirror of Radiance', type: 3, category: 'defense', img: 'https://hokstats.gg/items/13211.png' },
    { id: '11210', name: 'Mortal Punisher', type: 1, category: 'attack', img: 'https://hokstats.gg/items/11210.png' },
    { id: '1217', name: 'Mystic Page', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1217.png' },
    { id: '1243', name: 'Nebulon Wood', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1243.png' },
    { id: '1345', name: 'Nettle Gauntlet', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1345.png' },
    { id: '1333', name: 'Ominous Premonition', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1333.png' },
    { id: '1138', name: 'Overlord\'s Might', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1138.png' },
    { id: '1332', name: 'Overlord\'s Platemail', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1332.png' },
    { id: '1522', name: 'Patrol Axe', type: 5, category: 'jungle', img: 'https://hokstats.gg/items/1522.png' },
    { id: '11110', name: 'Plume of Enchantment', type: 1, category: 'attack', img: 'https://hokstats.gg/items/11110.png' },
    { id: '1218', name: 'Primordial Crystal', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1218.png' },
    { id: '1325', name: 'Protector\'s Cuirass', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1325.png' },
    { id: '1113', name: 'Pugilist\'s Gauntlet', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1113.png' },
    { id: '11311', name: 'Pure Sky', type: 1, category: 'attack', img: 'https://hokstats.gg/items/11311.png' },
    { id: '1533', name: 'Rapacious Bite', type: 5, category: 'jungle', img: 'https://hokstats.gg/items/1533.png' },
    { id: '1350', name: 'Ravage - Phantom', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1350.png' },
    { id: '1523', name: 'Relentless Blade', type: 5, category: 'jungle', img: 'https://hokstats.gg/items/1523.png' },
    { id: '1311', name: 'Resilient Agate', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1311.png' },
    { id: '1531', name: 'Runeblade', type: 5, category: 'jungle', img: 'https://hokstats.gg/items/1531.png' },
    { id: '1214', name: 'Sage\'s Codex', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1214.png' },
    { id: '1337', name: 'Sage\'s Sanctuary', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1337.png' },
    { id: '1238', name: 'Sage\'s Tome', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1238.png' },
    { id: '1232', name: 'Savant\'s Wrath', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1232.png' },
    { id: '1233', name: 'Scepter of Reverberation', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1233.png' },
    { id: '1136', name: 'Shadow Ripper', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1136.png' },
    { id: '1135', name: 'Sparkforged Dagger', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1135.png' },
    { id: '1211', name: 'Spell Tome', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1211.png' },
    { id: '1327', name: 'Spikemail', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1327.png' },
    { id: '1239', name: 'Splendor', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1239.png' },
    { id: '1131', name: 'Starbreaker', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1131.png' },
    { id: '1236', name: 'Staves of Sorcery', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1236.png' },
    { id: '1224', name: 'Stone of Sorcery', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1224.png' },
    { id: '1121', name: 'Storm Sword', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1121.png' },
    { id: '1335', name: 'Succubus Cloak', type: 3, category: 'defense', img: 'https://hokstats.gg/items/1335.png' },
    { id: '1141', name: 'Sunchaser', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1141.png' },
    { id: '1122', name: 'Sunglow Striker', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1122.png' },
    { id: '1129', name: 'Swiftstrike Lance', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1129.png' },
    { id: '1159', name: 'Tempest', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1159.png' },
    { id: '1116', name: 'Thunderclap Brand', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1116.png' },
    { id: '1727', name: 'Twilight Stream', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1727.png' },
    { id: '1123', name: 'Twinblades of Destruction', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1123.png' },
    { id: '1114', name: 'Vampiric Scythe', type: 1, category: 'attack', img: 'https://hokstats.gg/items/1114.png' },
    { id: '12211', name: 'Venomous Staff', type: 2, category: 'magic', img: 'https://hokstats.gg/items/12211.png' },
    { id: '1231', name: 'Void Staff', type: 2, category: 'magic', img: 'https://hokstats.gg/items/1231.png' }
];

let activeItemTarget = { playerSlot: null, itemSlot: null };
let activeCategoryFilter = 'all';

// ===== HERO DROPDOWN FILTER =====
function filterHeroDropdown(slotId) {
    const inputEl = document.getElementById(`hero-search-${slotId}`);
    const dropdownEl = document.getElementById(`hero-dropdown-${slotId}`);
    if (!inputEl || !dropdownEl) return;

    const query = inputEl.value.toLowerCase();
    dropdownEl.innerHTML = '';

    if (query.length === 0) {
        dropdownEl.style.display = 'none';
        return;
    }

    const filtered = heroes.filter(h => h.name.toLowerCase().includes(query));
    if (filtered.length === 0) {
        dropdownEl.style.display = 'none';
        return;
    }

    filtered.forEach(hero => {
        const item = document.createElement('div');
        item.classList.add('hero-dropdown-item');
        item.textContent = hero.name;
        item.addEventListener('click', () => selectHeroForSlot(hero, slotId));
        dropdownEl.appendChild(item);
    });

    dropdownEl.style.display = 'block';
}

// ===== SELECT HERO FOR SLOT =====
function selectHeroForSlot(hero, slotId) {
    const inputEl = document.getElementById(`hero-search-${slotId}`);
    const dropdownEl = document.getElementById(`hero-dropdown-${slotId}`);
    const portraitEl = document.getElementById(`hero-portrait-${slotId}`);
    const nameOverlayEl = document.getElementById(`hero-name-${slotId}`);

    if (inputEl) inputEl.value = hero.name;
    if (dropdownEl) {
        dropdownEl.innerHTML = '';
        dropdownEl.style.display = 'none';
    }

    if (portraitEl) {
        const existingImg = portraitEl.querySelector('img');
        if (existingImg) {
            existingImg.classList.add('fly-out');
            setTimeout(() => {
                portraitEl.innerHTML = `<img src="${hero.img}" alt="${hero.name}" class="fly-in">`;
            }, 400);
        } else {
            const placeholder = portraitEl.querySelector('.placeholder-icon');
            if (placeholder) placeholder.remove();
            portraitEl.innerHTML = `<img src="${hero.img}" alt="${hero.name}" class="fly-in">`;
        }
    }

    if (nameOverlayEl) {
        nameOverlayEl.textContent = hero.name;
    }
}

// ===== ITEM PICKER MODAL / SELECTION LOGIC =====
function openItemPicker(playerSlot, itemSlot) {
    activeItemTarget = { playerSlot, itemSlot };
    const modal = document.getElementById('item-picker-modal');
    const targetLabel = document.getElementById('item-picker-target-label');
    if (targetLabel) {
        targetLabel.textContent = `Pilih Item untuk Player ${playerSlot} - Slot Item ${itemSlot}`;
    }
    if (modal) modal.style.display = 'flex';
    renderItemPickerGrid();
}

function closeItemPicker() {
    const modal = document.getElementById('item-picker-modal');
    if (modal) modal.style.display = 'none';
    activeItemTarget = { playerSlot: null, itemSlot: null };
}

function setItemCategoryFilter(category) {
    activeCategoryFilter = category;
    
    // Update active tab buttons
    document.querySelectorAll('.item-cat-btn').forEach(btn => {
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderItemPickerGrid();
}

function renderItemPickerGrid() {
    const gridEl = document.getElementById('item-picker-grid');
    const searchEl = document.getElementById('item-picker-search');
    if (!gridEl) return;

    gridEl.innerHTML = '';

    const searchQuery = searchEl ? searchEl.value.toLowerCase().trim() : '';

    const filtered = gameItems.filter(item => {
        const matchCat = (activeCategoryFilter === 'all') || (item.category === activeCategoryFilter);
        const matchSearch = !searchQuery || item.name.toLowerCase().includes(searchQuery);
        return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
        gridEl.innerHTML = '<div class="item-empty-notice">Item tidak ditemukan</div>';
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-picker-card';
        card.title = `${item.name} (${item.category.toUpperCase()})`;
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <span>${item.name}</span>
        `;
        card.addEventListener('click', () => selectItemForTarget(item));
        gridEl.appendChild(card);
    });
}

function selectItemForTarget(item) {
    const { playerSlot, itemSlot } = activeItemTarget;
    if (!playerSlot || !itemSlot) return;

    setItemForPlayerSlot(playerSlot, itemSlot, item);
    closeItemPicker();
}

function setItemForPlayerSlot(playerSlot, itemSlot, item) {
    // Update Overlay Display
    const overlaySlot = document.getElementById(`hero-item-${playerSlot}-${itemSlot}`);
    if (overlaySlot) {
        if (item) {
            overlaySlot.innerHTML = `<img src="${item.img}" alt="${item.name}" title="${item.name}">`;
            overlaySlot.classList.add('has-item');
        } else {
            overlaySlot.innerHTML = '';
            overlaySlot.classList.remove('has-item');
        }
    }

    // Update Control Panel Display
    const ctrlSlot = document.getElementById(`ctrl-item-${playerSlot}-${itemSlot}`);
    if (ctrlSlot) {
        if (item) {
            ctrlSlot.innerHTML = `<img src="${item.img}" alt="${item.name}" title="${item.name}"><button class="clear-item-btn" onclick="event.stopPropagation(); clearItemForSlot(${playerSlot}, ${itemSlot})">×</button>`;
            ctrlSlot.classList.add('has-item');
        } else {
            ctrlSlot.innerHTML = `<span class="slot-num">${itemSlot}</span>`;
            ctrlSlot.classList.remove('has-item');
        }
    }
}

function clearItemForSlot(playerSlot, itemSlot) {
    setItemForPlayerSlot(playerSlot, itemSlot, null);
}



// ===== BATTLE SPELLS DATA (HoK 10 Mantra Tempur) =====
const BATTLE_SPELLS = [
    { id: '80115', name: 'Flash', img: 'https://game.gtimg.cn/images/yxzj/img201606/summoner/80115.jpg' },
    { id: '80104', name: 'Smite', img: 'https://game.gtimg.cn/images/yxzj/img201606/summoner/80104.jpg' },
    { id: '80102', name: 'Heal', img: 'https://game.gtimg.cn/images/yxzj/img201606/summoner/80102.jpg' },
    { id: '80107', name: 'Purify', img: 'https://game.gtimg.cn/images/yxzj/img201606/summoner/80107.jpg' },
    { id: '80108', name: 'Execute', img: 'https://game.gtimg.cn/images/yxzj/img201606/summoner/80108.jpg' },
    { id: '80110', name: 'Frenzy', img: 'https://game.gtimg.cn/images/yxzj/img201606/summoner/80110.jpg' },
    { id: '80121', name: 'Intimidate', img: 'https://game.gtimg.cn/images/yxzj/img201606/summoner/80121.jpg' },
    { id: '80109', name: 'Sprint', img: 'https://game.gtimg.cn/images/yxzj/img201606/summoner/80109.jpg' },
    { id: '80103', name: 'Stun', img: 'https://game.gtimg.cn/images/yxzj/img201606/summoner/80103.jpg' },
    { id: '80130', name: 'Teleport', img: 'https://game.gtimg.cn/images/yxzj/img201606/summoner/80130.jpg' }
];

function populateSpellDropdowns() {
    const defaultSpells = {
        1: '80115', // Clash -> Flash
        2: '80104', // Jungle -> Smite
        3: '80115', // Mid -> Flash
        4: '80115', // Farm -> Flash
        5: '80102', // Roam -> Heal
        6: '80102', // Roam -> Heal
        7: '80115', // Farm -> Flash
        8: '80115', // Mid -> Flash
        9: '80104', // Jungle -> Smite
        10: '80115' // Clash -> Flash
    };

    for (let i = 1; i <= 10; i++) {
        const select = document.getElementById(`spell-select-${i}`);
        if (!select) continue;
        select.innerHTML = '';
        BATTLE_SPELLS.forEach(spell => {
            const opt = document.createElement('option');
            opt.value = spell.id;
            opt.textContent = spell.name;
            if (spell.id === defaultSpells[i]) opt.selected = true;
            select.appendChild(opt);
        });
        updateSpell(i);
    }
}

function updateSpell(slotId) {
    const select = document.getElementById(`spell-select-${slotId}`);
    const imgEl = document.getElementById(`spell-img-${slotId}`);
    if (!select || !imgEl) return;
    const spell = BATTLE_SPELLS.find(s => s.id === select.value);
    if (spell) {
        imgEl.src = spell.img;
        imgEl.alt = spell.name;
    }
}

// ===== UPDATE PLAYER KDA =====
function updateKDA(slotId) {
    const kEl = document.getElementById(`kda-k-${slotId}`);
    const dEl = document.getElementById(`kda-d-${slotId}`);
    const aEl = document.getElementById(`kda-a-${slotId}`);
    const displayEl = document.getElementById(`kda-display-${slotId}`);

    if (displayEl) {
        const k = (kEl && kEl.value !== '') ? kEl.value : '0';
        const d = (dEl && dEl.value !== '') ? dEl.value : '0';
        const a = (aEl && aEl.value !== '') ? aEl.value : '0';
        displayEl.textContent = `${k} / ${d} / ${a}`;
    }
}

// ===== UPDATE PLAYER NICKNAME =====
function updatePlayerName(slotId) {
    const inputEl = document.getElementById(`nick-input-${slotId}`);
    const displayEl = document.getElementById(`player-name-${slotId}`);
    if (inputEl && displayEl) {
        displayEl.textContent = inputEl.value || `Player ${slotId}`;
    }
}

// ===== UPDATE TEAM NAME =====
function updateTeamNames() {
    const team1Input = document.getElementById('sb-team1-name');
    const team2Input = document.getElementById('sb-team2-name');
    const team1Display = document.getElementById('team-name-left');
    const team2Display = document.getElementById('team-name-right');

    if (team1Input && team1Display) team1Display.textContent = team1Input.value || 'TEAM A';
    if (team2Input && team2Display) team2Display.textContent = team2Input.value || 'TEAM B';
}

// ===== UPDATE SCORES =====
function updateScores() {
    const score1Input = document.getElementById('sb-score1');
    const score2Input = document.getElementById('sb-score2');
    const score1Display = document.getElementById('score-left');
    const score2Display = document.getElementById('score-right');

    if (score1Input && score1Display) score1Display.textContent = score1Input.value || '0';
    if (score2Input && score2Display) score2Display.textContent = score2Input.value || '0';
}

// ===== UPDATE TOURNAMENT NAME =====
function updateTournamentName() {
    const input = document.getElementById('sb-tournament-name');
    const display = document.getElementById('tournament-name');
    if (input && display) {
        display.textContent = input.value || 'HONOR OF KINGS TOURNAMENT';
    }
}

// ===== UPDATE WINNER (VICTORY/DEFEAT) =====
function updateWinner() {
    const select = document.getElementById('sb-winner');
    const victoryLeft = document.getElementById('victory-left');
    const defeatRight = document.getElementById('defeat-right');

    if (!select || !victoryLeft || !defeatRight) return;

    const winner = select.value;

    if (winner === 'left') {
        victoryLeft.textContent = 'VICTORY';
        victoryLeft.className = 'victory-text';
        defeatRight.textContent = 'DEFEAT';
        defeatRight.className = 'defeat-text';
    } else if (winner === 'right') {
        victoryLeft.textContent = 'DEFEAT';
        victoryLeft.className = 'defeat-text';
        defeatRight.textContent = 'VICTORY';
        defeatRight.className = 'victory-text';
    } else {
        victoryLeft.textContent = '';
        victoryLeft.className = 'victory-text';
        defeatRight.textContent = '';
        defeatRight.className = 'defeat-text';
    }
}

// ===== UPLOAD TEAM LOGO =====
function uploadTeamLogo(event, side) {
    const file = event.target.files[0];
    if (!file) return;

    const imgId = side === 'left' ? 'logo-left' : 'logo-right';
    const imgEl = document.getElementById(imgId);
    if (imgEl) {
        imgEl.src = URL.createObjectURL(file);
    }
}

// ===== RESET ALL =====
function resetScoreboard() {
    for (let i = 1; i <= 10; i++) {
        const portraitEl = document.getElementById(`hero-portrait-${i}`);
        const nameOverlayEl = document.getElementById(`hero-name-${i}`);
        const searchEl = document.getElementById(`hero-search-${i}`);
        const nickEl = document.getElementById(`nick-input-${i}`);
        const playerNameEl = document.getElementById(`player-name-${i}`);

        if (portraitEl) portraitEl.innerHTML = '<span class="placeholder-icon">⚔</span>';
        if (nameOverlayEl) nameOverlayEl.textContent = '';
        if (searchEl) searchEl.value = '';
        if (nickEl) nickEl.value = '';
        if (playerNameEl) playerNameEl.textContent = `Player ${i}`;

        const kEl = document.getElementById(`kda-k-${i}`);
        const dEl = document.getElementById(`kda-d-${i}`);
        const aEl = document.getElementById(`kda-a-${i}`);
        if (kEl) kEl.value = '0';
        if (dEl) dEl.value = '0';
        if (aEl) aEl.value = '0';
        updateKDA(i);
        const spellSel = document.getElementById(`spell-select-${i}`);
        if (spellSel) {
            const defaults = { 1:'80115', 2:'80104', 3:'80115', 4:'80115', 5:'80102', 6:'80102', 7:'80115', 8:'80115', 9:'80104', 10:'80115' };
            spellSel.value = defaults[i] || '80115';
            updateSpell(i);
        }

        // Reset items
        for (let j = 1; j <= 6; j++) {
            clearItemForSlot(i, j);
        }
    }

    const t1 = document.getElementById('sb-team1-name');
    const t2 = document.getElementById('sb-team2-name');
    if (t1) t1.value = 'TEAM A';
    if (t2) t2.value = 'TEAM B';
    updateTeamNames();

    const s1 = document.getElementById('sb-score1');
    const s2 = document.getElementById('sb-score2');
    if (s1) s1.value = '0';
    if (s2) s2.value = '0';
    updateScores();

    const winnerSel = document.getElementById('sb-winner');
    if (winnerSel) winnerSel.value = 'left';
    updateWinner();

    const tourney = document.getElementById('sb-tournament-name');
    if (tourney) tourney.value = 'HONOR OF KINGS TOURNAMENT';
    updateTournamentName();

    const logo1 = document.getElementById('logo-left');
    const logo2 = document.getElementById('logo-right');
    if (logo1) logo1.src = 'Assets/Other/UIN JKT ESPORT Original.png';
    if (logo2) logo2.src = 'Assets/Other/UIN JKT ESPORT Original.png';

    const file1 = document.getElementById('sb-logo1');
    const file2 = document.getElementById('sb-logo2');
    if (file1) file1.value = '';
    if (file2) file2.value = '';
}

// ===== SWITCH TEAMS =====
function switchTeams() {
    const t1 = document.getElementById('sb-team1-name');
    const t2 = document.getElementById('sb-team2-name');
    if (t1 && t2) {
        const temp = t1.value;
        t1.value = t2.value;
        t2.value = temp;
    }
    updateTeamNames();

    const s1 = document.getElementById('sb-score1');
    const s2 = document.getElementById('sb-score2');
    if (s1 && s2) {
        const temp = s1.value;
        s1.value = s2.value;
        s2.value = temp;
    }
    updateScores();

    const logo1 = document.getElementById('logo-left');
    const logo2 = document.getElementById('logo-right');
    if (logo1 && logo2) {
        const temp = logo1.src;
        logo1.src = logo2.src;
        logo2.src = temp;
    }

    for (let i = 1; i <= 5; i++) {
        const j = i + 5;

        // Swap search
        const search1 = document.getElementById(`hero-search-${i}`);
        const search2 = document.getElementById(`hero-search-${j}`);
        if (search1 && search2) {
            const temp = search1.value;
            search1.value = search2.value;
            search2.value = temp;
        }

        // Swap portraits
        const portrait1 = document.getElementById(`hero-portrait-${i}`);
        const portrait2 = document.getElementById(`hero-portrait-${j}`);
        if (portrait1 && portrait2) {
            const temp = portrait1.innerHTML;
            portrait1.innerHTML = portrait2.innerHTML;
            portrait2.innerHTML = temp;
        }

        // Swap names
        const name1 = document.getElementById(`hero-name-${i}`);
        const name2 = document.getElementById(`hero-name-${j}`);
        if (name1 && name2) {
            const temp = name1.textContent;
            name1.textContent = name2.textContent;
            name2.textContent = temp;
        }

        // Swap nicknames
        const nick1 = document.getElementById(`nick-input-${i}`);
        const nick2 = document.getElementById(`nick-input-${j}`);
        if (nick1 && nick2) {
            const temp = nick1.value;
            nick1.value = nick2.value;
            nick2.value = temp;
        }

        updatePlayerName(i);
        updatePlayerName(j);

        // Swap KDA
        const k1 = document.getElementById(`kda-k-${i}`);
        const d1 = document.getElementById(`kda-d-${i}`);
        const a1 = document.getElementById(`kda-a-${i}`);
        const k2 = document.getElementById(`kda-k-${j}`);
        const d2 = document.getElementById(`kda-d-${j}`);
        const a2 = document.getElementById(`kda-a-${j}`);

        if (k1 && k2) { const tmp = k1.value; k1.value = k2.value; k2.value = tmp; }
        if (d1 && d2) { const tmp = d1.value; d1.value = d2.value; d2.value = tmp; }
        if (a1 && a2) { const tmp = a1.value; a1.value = a2.value; a1.value = tmp; }

        updateKDA(i);
        updateKDA(j);

        // Swap Spells
        const spell1 = document.getElementById(`spell-select-${i}`);
        const spell2 = document.getElementById(`spell-select-${j}`);
        if (spell1 && spell2) {
            const tmp = spell1.value;
            spell1.value = spell2.value;
            spell2.value = tmp;
            updateSpell(i);
            updateSpell(j);
        }

        // Swap items (6 slots)
        for (let k = 1; k <= 6; k++) {
            const ovItem1 = document.getElementById(`hero-item-${i}-${k}`);
            const ovItem2 = document.getElementById(`hero-item-${j}-${k}`);

            const img1 = ovItem1 ? ovItem1.querySelector('img') : null;
            const img2 = ovItem2 ? ovItem2.querySelector('img') : null;

            const itemObj1 = img1 ? { img: img1.src, name: img1.alt } : null;
            const itemObj2 = img2 ? { img: img2.src, name: img2.alt } : null;

            setItemForPlayerSlot(i, k, itemObj2);
            setItemForPlayerSlot(j, k, itemObj1);
        }
    }

    const winnerSel = document.getElementById('sb-winner');
    if (winnerSel) {
        if (winnerSel.value === 'left') winnerSel.value = 'right';
        else if (winnerSel.value === 'right') winnerSel.value = 'left';
    }
    updateWinner();
}

// ===== CLOSE DROPDOWNS ON OUTSIDE CLICK =====
document.addEventListener('click', (e) => {
    if (!e.target.closest('.hero-dropdown-container')) {
        document.querySelectorAll('.hero-dropdown-items').forEach(dd => {
            dd.style.display = 'none';
        });
    }
});

// ===== INITIALIZE ON LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    populateSpellDropdowns();
    updateTeamNames();
    updateScores();
    updateTournamentName();
    updateWinner();
    for (let i = 1; i <= 10; i++) {
        updateKDA(i);
    }
});
