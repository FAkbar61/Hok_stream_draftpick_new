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
    { name: 'Da qiao', img: 'Assets/HeroPick/Da Qiao.png' },
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
    { name: 'Shoyue', img: 'Assets/HeroPick/Shouyue.png' },
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




// Menampilkan dropdown berdasarkan pencarian
function filterDropdown(id) {
    const searchInput = document.getElementById(`search-${id}`).value.toLowerCase();
    const dropdownItems = document.getElementById(`dropdown-items-${id}`);
    dropdownItems.innerHTML = ''; // Kosongkan dropdown sebelum ditampilkan

    // Filter heroes berdasarkan pencarian
    heroes
        .filter(hero => hero.name.toLowerCase().includes(searchInput))
        .forEach(hero => {
            const item = document.createElement('div');
            item.classList.add('dropdown-item');
            item.textContent = hero.name;
            item.onclick = () => selectHero(hero, id);
            dropdownItems.appendChild(item);
        });
}

// Menampilkan gambar hero yang dipilih dengan animasi saat berubah
function selectHero(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    const existingImage = imageDisplay.querySelector('img');

    if (existingImage) {
        // Jika ada gambar yang sudah ada, tambahkan animasi fly-out
        existingImage.classList.add('fly-out');
        // Ganti gambar setelah animasi fly-out selesai (0.5 detik)
        setTimeout(() => {
            updateHeroImage(hero, id);
        }, 500);
    } else {
        // Jika belum ada gambar, langsung tampilkan gambar baru
        updateHeroImage(hero, id);
    }
}

// Fungsi untuk meng-update gambar hero dengan animasi fly-in
function updateHeroImage(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    imageDisplay.innerHTML = `<img src="${hero.img}" alt="${hero.name}" class="fly-in">`;
    document.getElementById(`search-${id}`).value = hero.name;
    document.getElementById(`dropdown-items-${id}`).innerHTML = ''; // Sembunyikan dropdown
}

// Reset semua dropdown dan input dengan animasi fly-out
function resetAllDropdowns() {
    for (let i = 1; i <= 18; i++) {
        const imageDisplay = document.getElementById(`image-display-${i}`);
        if (imageDisplay.innerHTML) {
            // Tambahkan kelas animasi fly-out
            imageDisplay.querySelector('img').classList.add('fly-out');
        }

        // Hapus nilai input dan dropdown setelah animasi selesai
        setTimeout(() => {
            document.getElementById(`search-${i}`).value = '';
            imageDisplay.innerHTML = '';
            document.getElementById(`dropdown-items-${i}`).innerHTML = '';
        }, 500); // Delay sesuai dengan durasi animasi (0.5 detik)
    }
}

 // Fungsi untuk mengupdate output NICKNAME=------------=-=-==-
 function updateOutput() {
    for (let i = 1; i <= 10; i++) {
        const inputText = document.getElementById('input' + i).value;
        document.getElementById('output' + i).textContent = ` ${inputText}`;
    }
}

// Fungsi untuk mereset semua input
function resetInputs() {
    for (let i = 1; i <= 10; i++) {
        document.getElementById('input' + i).value = '';
        document.getElementById('output' + i).textContent = ` `;
    }
}

// Fungsi untuk menukar nilai 1-5 dengan 6-10
function switchInputs() {
    for (let i = 1; i <= 5; i++) {
        const temp = document.getElementById('input' + i).value;
        document.getElementById('input' + i).value = document.getElementById('input' + (i + 5)).value;
        document.getElementById('input' + (i + 5)).value = temp;
    }
    // Update output setelah switch
    updateOutput();
}

 // Fungsi untuk menukar gambar dan nama tim
 function swapContent() {
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;

    const teamDisplay1 = document.getElementById('teamNameDisplay1');
    const teamDisplay2 = document.getElementById('teamNameDisplay2');
    const teamDisplay3 = document.getElementById('teamNameDisplay3');
    const teamDisplay4 = document.getElementById('teamNameDisplay4');

    const tempTeamDisplay = teamDisplay1.textContent;
    teamDisplay1.textContent = teamDisplay2.textContent;
    teamDisplay2.textContent = tempTeamDisplay;

    const tempTeamDisplay1 = teamDisplay3.textContent;
    teamDisplay3.textContent = teamDisplay4.textContent;
    teamDisplay4.textContent = tempTeamDisplay1;
}

// Fungsi untuk memuat gambar dari file lokal
function loadImage(event, imgId) {
    const img = document.getElementById(imgId);
    img.src = URL.createObjectURL(event.target.files[0]);
}

// Fungsi untuk mengupdate nama tim yang ditampilkan
function updateTeamName() {
    const team1 = document.getElementById('team1').value;
    const team2 = document.getElementById('team2').value;
    const team3 = document.getElementById('team3').value;
    const team4 = document.getElementById('team4').value;

    document.getElementById('teamNameDisplay1').textContent = team1;
    document.getElementById('teamNameDisplay2').textContent = team2;
    document.getElementById('teamNameDisplay3').textContent = team3;
    document.getElementById('teamNameDisplay4').textContent = team4;
}

// Fungsi untuk mereset gambar, nama tim, dan checkbox ke kondisi awal
function resetContent() {
    document.getElementById('team1').value = "Team 1";
    document.getElementById('team2').value = "Team 2";
    updateTeamName();

    document.getElementById('image1').src = "https://via.placeholder.com/300x200?text=Image+1";
    document.getElementById('image2').src = "https://via.placeholder.com/300x200?text=Image+2";

    document.getElementById('file1').value = "";
    document.getElementById('file2').value = "";

    // Reset checkbox dan gambar tambahan
    for (let i = 1; i <= 6; i++) {
        document.getElementById('checkbox' + i).unchecked = true;
        document.getElementById('extraImage' + i).style.display = "block";
    }
}

// Fungsi untuk menampilkan atau menyembunyikan gambar berdasarkan checkbox
function toggleImage(imageId) {
    const image = document.getElementById(imageId);
    const checkbox = document.getElementById('checkbox' + imageId.slice(-1));
    image.style.display = checkbox.checked ? "block" : "none";
}

// Fungsi untuk menukar semua (nama tim, gambar utama, dan status checkbox 1-3 dengan 4-6)
function switchAll() {
    // Tukar nama tim
    const team1 = document.getElementById('team1');
    const team2 = document.getElementById('team2');
    const tempName = team1.value;
    team1.value = team2.value;
    team2.value = tempName;

    const team3 = document.getElementById('team3');
    const team4 = document.getElementById('team4');
    const tempName1 = team3.value;
    team3.value = team4.value;
    team4.value = tempName1;
    updateTeamName();

    // Tukar gambar utama
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const tempSrc = img1.src;
    img1.src = img2.src;
    img2.src = tempSrc;

    // Tukar status checkbox dan visibilitas gambar tambahan
    for (let i = 1; i <= 3; i++) {
        const checkboxA = document.getElementById('checkbox' + i);
        const checkboxB = document.getElementById('checkbox' + (i + 3));
        const extraImageA = document.getElementById('extraImage' + i);
        const extraImageB = document.getElementById('extraImage' + (i + 3));

        // Tukar status checkbox
        const tempChecked = checkboxA.checked;
        checkboxA.checked = checkboxB.checked;
        checkboxB.checked = tempChecked;

        // Tukar tampilan gambar berdasarkan checkbox
        extraImageA.style.display = checkboxA.checked ? "block" : "none";
        extraImageB.style.display = checkboxB.checked ? "block" : "none";
    }
}

    // Ambil elemen input dan output
    const tournamentnameInput = document.getElementById('tournamentnamemid');
    const tournamentnameOutput = document.getElementById('tournamentnameOutput');

    // Fungsi untuk menampilkan teks yang sama di output saat user mengetik
    tournamentnameInput.addEventListener('input', function() {
      tournamentnameOutput.textContent = tournamentnameInput.value;
    });

//timer

const phases = [
    { type: "", direction: "Assets/Other/leftbanning.gif" },
    { type: "", direction: "Assets/Other/rightbanning.gif" },
    { type: "", direction: "Assets/Other/leftbanning.gif" },
    { type: "", direction: "Assets/Other/rightbanning.gif" },
    { type: "", direction: "Assets/Other/leftpicking.gif" },
    { type: "", direction: "Assets/Other/rightpicking.gif" },
    { type: "", direction: "Assets/Other/leftpicking.gif" },
    { type: "", direction: "Assets/Other/rightpicking.gif" },
    { type: "", direction: "Assets/Other/rightbanning.gif" },
    { type: "", direction: "Assets/Other/leftbanning.gif" },
    { type: "", direction: "Assets/Other/rightbanning.gif" },
    { type: "", direction: "Assets/Other/leftbanning.gif" },
    { type: "", direction: "Assets/Other/rightpicking.gif" },
    { type: "", direction: "Assets/Other/leftpicking.gif" },
    { type: "", direction: "Assets/Other/rightpicking.gif" },
    { type: "", direction: "Assets/Other/Adjustment.gif" },

];

let currentPhaseIndex = 0;
let timer = 45;
let timerInterval;
let timerRunning = false;

const phaseElement = document.getElementById('phase');
const arrowElement = document.getElementById('arrow');
const timerElement = document.getElementById('timer');
const timerBar = document.getElementById('timer-bar');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const nextPhaseButton = document.getElementById('nextPhase');
const resetButton = document.getElementById('reset');

function updateUI() {
    if (currentPhaseIndex < phases.length) {
        const currentPhase = phases[currentPhaseIndex];
        phaseElement.textContent = currentPhase.type;
        arrowElement.src = currentPhase.direction;
        timerElement.textContent = timer;
        timerBar.style.transition = "none";
        timerBar.style.width = "100%";
        timerBar.style.left = "50%";
        timerBar.style.transform = "translateX(-50%) scaleX(1)";
    } else {
        phaseElement.textContent = "All Phases Completed";
        arrowElement.src = "";
        timerElement.textContent = "";
        timerBar.style.width = "0%";
        nextPhaseButton.disabled = true;
    }
}

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timerBar.style.transition = `transform ${timer}s linear`;
        timerBar.style.transform = "translateX(-50%) scaleX(0)";
        timerInterval = setInterval(() => {
            if (timer > 0) {
                timer--;
                timerElement.textContent = timer;
            } else {
                clearInterval(timerInterval);
                timerRunning = false;
                moveToNextPhase();
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    timerBar.style.transition = "none";
}

function moveToNextPhase() {
    if (currentPhaseIndex < phases.length - 1) {
        currentPhaseIndex++;
        timer = 45;
        stopTimer();
        timerBar.style.transition = "none";
        timerBar.style.transform = "translateX(-50%) scaleX(1)";
        updateUI();
        setTimeout(() => {
            timerBar.style.transition = `transform ${timer}s linear`;
            timerBar.style.transform = "translateX(-50%) scaleX(0)";
            startTimer();
        }, 100);
    }
}

function reset() {
    clearInterval(timerInterval);
    currentPhaseIndex = 0;
    timer = 45;
    timerRunning = false;
    updateUI();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
nextPhaseButton.addEventListener('click', () => {
    stopTimer();
    moveToNextPhase();
});
resetButton.addEventListener('click', reset);

updateUI();