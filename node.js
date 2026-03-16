const showTimer = document.getElementById("show-timer")
            const showEl1 = document.getElementById("show-el1")
            const showEl2 = document.getElementById("show-el2")
            const dashLeft = document.getElementById("dashL")
            const dashRight = document.getElementById("dashR")
            
            const startBtn = document.getElementById("start-btn")
            const resetBtn = document.getElementById("reset-btn")
            const add1OneBtn = document.getElementById("add1One-btn")
            const add1TwoBtn = document.getElementById("add1Two-btn")
            const add1ThreeBtn = document.getElementById("add1Three-btn")
            const add2OneBtn = document.getElementById("add2One-btn")
            const add2TwoBtn = document.getElementById("add2Two-btn")
            const add2ThreeBtn = document.getElementById("add2Three-btn")
            
            
            let count1 = 0
            let count2 = 0
            let seconds = 0
            let timer;
            
            function clearDisplay() {
            	showTimer.textContent = "00:00"
            	showEl1.textContent = 0
            	showEl2.textContent = 0
            }
            function displaySleep() {
            	showTimer.classList.remove("active")
    			    showEl1.classList.remove("active")
    			    showEl2.classList.remove("active")
              dashLeft.classList.remove("active")
              dashRight.classList.remove("active")
            }
            function displayActive() {
            	showTimer.classList.add("active")
    			    showEl1.classList.add("active")
    			    showEl2.classList.add("active")
              dashLeft.classList.add("active")
              dashRight.classList.add("active")
            }
            function clearTimer() {
            	seconds = 0
              clearInterval(timer);
            }
            function resetSettingsOff() {
              startBtn.disabled = false
              resetBtn.disabled = true
            	add1OneBtn.disabled = true
              add1TwoBtn.disabled = true
              add1ThreeBtn.disabled = true
				      add2OneBtn.disabled = true
              add2TwoBtn.disabled = true
              add2ThreeBtn.disabled = true
            }
            function gameSettingsOn() {
            	startBtn.disabled = true
              resetBtn.disabled = false
				      add1OneBtn.disabled = false
              add1TwoBtn.disabled = false
              add1ThreeBtn.disabled = false
				      add2OneBtn.disabled = false
              add2TwoBtn.disabled = false
              add2ThreeBtn.disabled = false
            }
            
            
            function add1One() {
            	count1 += 1
              showEl1.textContent = count1
            }
            function add1Two() {
            	count1 += 2
              showEl1.textContent = count1
            }
            function add1Three() {
            	count1 += 3
              showEl1.textContent = count1
            }
            function add2One() {
            	count2 += 1
              showEl2.textContent = count2
            }
            function add2Two() {
            	count2 += 2
              showEl2.textContent = count2
            }
            function add2Three() {
            	count2 += 3
              showEl2.textContent = count2
            }
            
            clearDisplay()
            resetSettingsOff()
            
            function reset() {
            	clearDisplay()
              clearTimer()
              displaySleep()
              resetSettingsOff()
            }
			function startStop() {
            	displayActive()
				      gameSettingsOn()
              showEl1.textContent = 0
              showEl2.textContent = 0
              timer = setInterval(updateTimer, 100);
            }
			function updateTimer() {
                seconds++;
                let minutes = Math.floor(seconds / 60);
                let remainingSeconds = seconds % 60;
                minutes = String(minutes).padStart(2, "0");
                remainingSeconds = String(remainingSeconds).padStart(2, "0");
                showTimer.textContent = `${minutes}:${remainingSeconds}`;
            }
