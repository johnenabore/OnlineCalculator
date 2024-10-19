<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Calculator</title>
    <script src="https://kit.fontawesome.com/136b6acc27.js" crossorigin="anonymous"></script>
</head>
<body> 

    <header>
        <nav id="nav-container">
            <div id="after-side">
                <i id="f" class="fa-solid fa-bars" onclick="showSideBar()"></i>
                <p><b>Calculator</b> by: John Enabore</p>
            </div>
            
            <div id="side">
                <i id="x" class="fa-solid fa-xmark" onclick="hideSideBar()"></i>
            </div>
        </nav>

        <div id="screen-container">
            <h2 id="math"></h2>
            <h2 id="result"></h2>
        </div>
    </header>  

    <main id="button-main">
        <div id="button-container">
            <div>
                <button class="buttons" type="button" id="delete">AC</button>
            </div>
            
            <div>
                <button class="buttons" type="button">%</button>
            </div>

            <div>
                <button id="backspace" type="button">
                    <i class="fa-solid fa-delete-left" style="background-color: transparent;" ></i>
                </button>
            </div>

            <div>
                <button id="button_white" class="buttons" type="button">/</button>
            </div>   
        </div>

        <div id="button-container2">
            <div>
                <button class="buttons" type="button" id="seven">7</button>
            </div>

            <div>
                <button class="buttons" type="button" id="eight">8</button>
            </div>

            <div>
                <button class="buttons" type="button" id="nine">9</button>
            </div>

            <div>
                <button id="button_white2" class="buttons" type="button">*</button>
            </div>
        </div>

        <div id="button-container3">
            <div>
                <button id="four" class="buttons" type="button">4</button>
            </div>

            <div>
                <button class="buttons" type="button" id="five">5</button>
            </div>

            <div>
                <button class="buttons" type="button" id="six">6</button>
            </div>

            <div>
                <button class="buttons" id="button_white3" type="button">-</button>
            </div>
        </div>

        <div id="button-container4">
            <div>
                <button id="one" class="buttons" type="button">1</button>
            </div>

            <div>
                <button id="two" class="buttons" type="button">2</button>
            </div>

            <div>
                <button id="three" class="buttons" type="button">3</button>
            </div>

            <div>
                <button class="buttons" type="button" id="button_white4">+</button>
            </div>
        </div>

        <div id="button-container5">
            <div>
                <button class="buttons" type="button" id="zero">0</button>
            </div>

            <div>
                <button class="buttons" type="button" id="period">.</button>
            </div>

            <div>
                <button id="equalsign" class="buttons" type="button">=</button>
            </div>

        </div>
    </main>
        <script src="index.js"></script>
</body>
</html>
