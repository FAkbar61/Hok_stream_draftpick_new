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

// Menampilkan dropdown berdasarkan pencarian
function filterDropdown(id) {
    const inputEl = document.getElementById(`search-${id}`);
    const dropdownItems = document.getElementById(`dropdown-items-${id}`);
    if (!inputEl || !dropdownItems) return;

    const searchInput = inputEl.value.toLowerCase();
    dropdownItems.innerHTML = '';

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
    if (!imageDisplay) return;

    const existingImage = imageDisplay.querySelector('img');

    if (existingImage) {
        existingImage.classList.add('fly-out');
        setTimeout(() => {
            updateHeroImage(hero, id);
        }, 500);
    } else {
        updateHeroImage(hero, id);
    }
}

// Fungsi untuk meng-update gambar hero dengan animasi fly-in
function updateHeroImage(hero, id) {
    const imageDisplay = document.getElementById(`image-display-${id}`);
    const searchInput = document.getElementById(`search-${id}`);
    const dropdownItems = document.getElementById(`dropdown-items-${id}`);

    if (imageDisplay) {
        imageDisplay.innerHTML = `<img src="${hero.img}" alt="${hero.name}" class="fly-in">`;
    }
    if (searchInput) {
        searchInput.value = hero.name;
    }
    if (dropdownItems) {
        dropdownItems.innerHTML = '';
    }
}

// Reset semua dropdown dan input dengan animasi fly-out
function resetAllDropdowns() {
    for (let i = 1; i <= 18; i++) {
        const imageDisplay = document.getElementById(`image-display-${i}`);
        const searchInput = document.getElementById(`search-${i}`);
        const dropdownItems = document.getElementById(`dropdown-items-${i}`);

        if (imageDisplay && imageDisplay.innerHTML) {
            const img = imageDisplay.querySelector('img');
            if (img) img.classList.add('fly-out');
        }

        setTimeout(() => {
            if (searchInput) searchInput.value = '';
            if (imageDisplay) imageDisplay.innerHTML = '';
            if (dropdownItems) dropdownItems.innerHTML = '';
        }, 500);
    }
}

// Fungsi untuk mengupdate output NICKNAME
function updateOutput() {
    for (let i = 1; i <= 10; i++) {
        const inputEl = document.getElementById('input' + i);
        const outputEl = document.getElementById('output' + i);
        if (inputEl && outputEl) {
            outputEl.textContent = inputEl.value;
        }
    }
}

// Fungsi untuk mereset semua input nickname
function resetInputs() {
    for (let i = 1; i <= 10; i++) {
        const inputEl = document.getElementById('input' + i);
        const outputEl = document.getElementById('output' + i);
        if (inputEl) inputEl.value = '';
        if (outputEl) outputEl.textContent = '';
    }
}

// Fungsi untuk menukar nilai 1-5 dengan 6-10
function switchInputs() {
    for (let i = 1; i <= 5; i++) {
        const inputA = document.getElementById('input' + i);
        const inputB = document.getElementById('input' + (i + 5));
        if (inputA && inputB) {
            const temp = inputA.value;
            inputA.value = inputB.value;
            inputB.value = temp;
        }
    }
    updateOutput();
}

// Fungsi untuk menukar gambar dan nama tim
function swapContent() {
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    if (img1 && img2) {
        const tempSrc = img1.src;
        img1.src = img2.src;
        img2.src = tempSrc;
    }

    const teamDisplay1 = document.getElementById('teamNameDisplay1');
    const teamDisplay2 = document.getElementById('teamNameDisplay2');
    const teamDisplay3 = document.getElementById('teamNameDisplay3');
    const teamDisplay4 = document.getElementById('teamNameDisplay4');

    if (teamDisplay1 && teamDisplay2) {
        const tempTeamDisplay = teamDisplay1.textContent;
        teamDisplay1.textContent = teamDisplay2.textContent;
        teamDisplay2.textContent = tempTeamDisplay;
    }

    if (teamDisplay3 && teamDisplay4) {
        const tempTeamDisplay1 = teamDisplay3.textContent;
        teamDisplay3.textContent = teamDisplay4.textContent;
        teamDisplay4.textContent = tempTeamDisplay1;
    }
}

// Fungsi untuk memuat gambar dari file lokal
function loadImage(event, imgId) {
    const img = document.getElementById(imgId);
    if (img && event.target.files && event.target.files[0]) {
        img.src = URL.createObjectURL(event.target.files[0]);
    }
}

// Fungsi untuk mengupdate nama tim yang ditampilkan
function updateTeamName() {
    const team1El = document.getElementById('team1');
    const team2El = document.getElementById('team2');
    const team3El = document.getElementById('team3');
    const team4El = document.getElementById('team4');

    const team1 = team1El ? team1El.value : 'Blue Side';
    const team2 = team2El ? team2El.value : 'Red Side';
    const team3 = team3El ? team3El.value : '0';
    const team4 = team4El ? team4El.value : '0';

    const t1Disp = document.getElementById('teamNameDisplay1');
    const t2Disp = document.getElementById('teamNameDisplay2');
    const t3Disp = document.getElementById('teamNameDisplay3');
    const t4Disp = document.getElementById('teamNameDisplay4');

    if (t1Disp) t1Disp.textContent = team1;
    if (t2Disp) t2Disp.textContent = team2;
    if (t3Disp) t3Disp.textContent = team3;
    if (t4Disp) t4Disp.textContent = team4;
}

// Fungsi untuk mereset gambar, nama tim
function resetContent() {
    const team1El = document.getElementById('team1');
    const team2El = document.getElementById('team2');
    const team3El = document.getElementById('team3');
    const team4El = document.getElementById('team4');

    if (team1El) team1El.value = "Blue Side";
    if (team2El) team2El.value = "Red Side";
    if (team3El) team3El.value = "0";
    if (team4El) team4El.value = "0";

    updateTeamName();

    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    if (img1) img1.src = "Assets/Other/UIN JKT ESPORT Original.png";
    if (img2) img2.src = "Assets/Other/UIN JKT ESPORT Original.png";

    const file1 = document.getElementById('file1');
    const file2 = document.getElementById('file2');
    if (file1) file1.value = "";
    if (file2) file2.value = "";

    for (let i = 1; i <= 6; i++) {
        const checkbox = document.getElementById('checkbox' + i);
        if (checkbox) checkbox.checked = true;
        const extraImage = document.getElementById('extraImage' + i);
        if (extraImage) extraImage.style.display = "block";
    }
}

// Fungsi untuk menampilkan atau menyembunyikan gambar berdasarkan checkbox
function toggleImage(imageId) {
    const image = document.getElementById(imageId);
    const checkbox = document.getElementById('checkbox' + imageId.slice(-1));
    if (image && checkbox) {
        image.style.display = checkbox.checked ? "block" : "none";
    }
}

// Fungsi untuk menukar nama tim dan logo
function switchAll() {
    const team1 = document.getElementById('team1');
    const team2 = document.getElementById('team2');
    if (team1 && team2) {
        const tempName = team1.value;
        team1.value = team2.value;
        team2.value = tempName;
    }

    const team3 = document.getElementById('team3');
    const team4 = document.getElementById('team4');
    if (team3 && team4) {
        const tempName1 = team3.value;
        team3.value = team4.value;
        team4.value = tempName1;
    }
    updateTeamName();

    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    if (img1 && img2) {
        const tempSrc = img1.src;
        img1.src = img2.src;
        img2.src = tempSrc;
    }

    for (let i = 1; i <= 3; i++) {
        const checkboxA = document.getElementById('checkbox' + i);
        const checkboxB = document.getElementById('checkbox' + (i + 3));
        const extraImageA = document.getElementById('extraImage' + i);
        const extraImageB = document.getElementById('extraImage' + (i + 3));

        if (checkboxA && checkboxB) {
            const tempChecked = checkboxA.checked;
            checkboxA.checked = checkboxB.checked;
            checkboxB.checked = tempChecked;

            if (extraImageA) extraImageA.style.display = checkboxA.checked ? "block" : "none";
            if (extraImageB) extraImageB.style.display = checkboxB.checked ? "block" : "none";
        }
    }
}

// Tournament Name Sync
document.addEventListener('DOMContentLoaded', () => {
    const tournamentnameInput = document.getElementById('tournamentnamemid');
    const tournamentnameOutput = document.getElementById('tournamentnameOutput');

    if (tournamentnameInput) {
        tournamentnameInput.addEventListener('input', function () {
            if (tournamentnameOutput) {
                tournamentnameOutput.textContent = tournamentnameInput.value;
            }
        });
    }
});

// Timer functionality
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
        if (phaseElement) phaseElement.textContent = currentPhase.type;
        if (arrowElement) arrowElement.src = currentPhase.direction;
        if (timerElement) timerElement.textContent = timer;
        if (timerBar) {
            timerBar.style.transition = "none";
            timerBar.style.width = "100%";
            timerBar.style.left = "50%";
            timerBar.style.transform = "translateX(-50%) scaleX(1)";
        }
    } else {
        if (phaseElement) phaseElement.textContent = "All Phases Completed";
        if (arrowElement) arrowElement.src = "";
        if (timerElement) timerElement.textContent = "";
        if (timerBar) timerBar.style.width = "0%";
        if (nextPhaseButton) nextPhaseButton.disabled = true;
    }
}

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        if (timerBar) {
            timerBar.style.transition = `transform ${timer}s linear`;
            timerBar.style.transform = "translateX(-50%) scaleX(0)";
        }
        timerInterval = setInterval(() => {
            if (timer > 0) {
                timer--;
                if (timerElement) timerElement.textContent = timer;
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
    if (timerBar) timerBar.style.transition = "none";
}

function moveToNextPhase() {
    if (currentPhaseIndex < phases.length - 1) {
        currentPhaseIndex++;
        timer = 45;
        stopTimer();
        if (timerBar) {
            timerBar.style.transition = "none";
            timerBar.style.transform = "translateX(-50%) scaleX(1)";
        }
        updateUI();
        setTimeout(() => {
            if (timerBar) {
                timerBar.style.transition = `transform ${timer}s linear`;
                timerBar.style.transform = "translateX(-50%) scaleX(0)";
            }
            startTimer();
        }, 100);
    }
}

function reset() {
    clearInterval(timerInterval);
    currentPhaseIndex = 0;
    timer = 45;
    timerRunning = false;
    if (nextPhaseButton) nextPhaseButton.disabled = false;
    updateUI();
}

if (startButton) startButton.addEventListener('click', startTimer);
if (stopButton) stopButton.addEventListener('click', stopTimer);
if (nextPhaseButton) {
    nextPhaseButton.addEventListener('click', () => {
        stopTimer();
        moveToNextPhase();
    });
}
if (resetButton) resetButton.addEventListener('click', reset);

updateUI();