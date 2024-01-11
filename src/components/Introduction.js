import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import './Introduction.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Introduction() {
    useEffect(() => {
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
        popoverTriggerList.forEach((popoverTriggerEl) => {
            new window.bootstrap.Popover(popoverTriggerEl);
        });
    }, []);

    const [open, setOpen] = useState(false);

    return (
        <div className='intro-about-section'>
            <div className='intro-container'>
                <div className="intro-title">
                    <h1>Hi! Thanks for stopping by! 🌱</h1>
                    <div className="intro-text">
                        <p>
                            My name is Hikaru. I am a computer science and business student
                            in my 3rd year at the University of British Columbia with a strong interest in Software Development,
                            FinTech, PM, and Design. I strive to leverage the seemingly disparate
                            fields of business and tech and continually learn about how these areas
                            can work together to improve other people's lives.
                        </p>
                        <p>
                            I am currently a developer and financial director for UBC's largest technology club, UBC Biztech.
                            While I am still in the process of gaining professional development experience,
                            I am earnestly working towards securing my first internship. I am excited about the opportunity to learn,
                            improve, and embark on a journey to become a better developer and technical solutions enthusiast.
                            I am striving to further my knowledge and skills to contribute all I can to the ever-evolving
                            field of technology.
                        </p>
                        <p>
                            Outside of school, you’ll often find me exploring the great outdoors - hiking and fishing at BC's stunning turquoise lakes,
                            taking photos, or working on a creative project!
                        </p>
                        <p>
                            ☀️I am currently seeking internship positions from May. 2024.
                        </p>
                        <div className='japanese-section'>
                            <Button
                                variant="outline-light"
                                onClick={() => setOpen(!open)}
                                aria-controls="collapse-text"
                                aria-expanded={open}
                                style={{
                                    marginBottom: '20px',
                                    cursor: 'pointer',
                                    color: 'black',
                                    borderColor: '#d3d3d3',
                                }}
                            >
                                日本語で読む
                            </Button>
                            <Collapse in={open}>
                                <div id="collapse-text">
                                    <p>こんにちは。ユエン光と申します。私は日本人と中国人のハーフで、カナダと日本の二重国籍を持つ、UBC
                                        （ブリティッシュコロンビア大学）の3年生で、コンピュータサイエンスとビジネスを専攻しています。
                                        ソフトウェア開発、FinTech、プロジェクトマネジメント、そしてデザインに深い興味を持っています。
                                        私はビジネスとテクノロジーといった異なる分野がどのように連携して人々の生活を向上させるのかを常に学び、
                                        活用しようと考えています。
                                    </p>

                                    <p>学業の傍ら、私はよく自然を探索したり、写真を撮ったり、読書も楽しんでいます！</p>

                                    <p>☀️現在、ソフトウェア開発のインターンシップの機会を求めています。2024年5月以降勤務可能です。
                                        日本国内での対面勤務も可能です。
                                    </p>
                                    <p>どうぞよろしくお願いいたします。</p>
                                </div>
                            </Collapse>
                        </div>
                        <p className='about-title'>
                            About, in case you're curious
                        </p>
                    </div>
                </div>
            </div>
            <div className='about-section'>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Education
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                I am currently in my 3rd year of study at the University of British Columbia
                                in Vancouver, Canada. I major in computer science and business, and have covered
                                coursework relevant to both fields of study. This includes classes like Software
                                Construction, Computational Modelling, Computer Systems, Statistics, and Management
                                Information Systems, to name a few. I enjoy this program because it provides me with
                                valuable insights into both aspects of project development, allowing me to understand
                                the full lifecycle of bringing amazing products to end-users.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Work Experience
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                I wish there was something here too.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Favorites
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <p>Favorite Course: 67 80 83 67 50 49 48 </p>
                                <p>Favorite Color: 0x121212</p>
                                <p>Favorite Place I've Visited: (20.750900, -156.455150)</p>
                                <p>Favorite Food: 鍋物</p>
                                <p>Favorite Drink: 1011000010111010</p>
                                <p>Favorite TV Show:
                                    <button type="button" class="btn btn-light" data-bs-container="body"
                                        data-bs-toggle="popover" data-bs-placement="top"
                                        data-bs-content="
                                        ⠀⠀⠀⢀⡴⣫⠎⠙⣡⠞⣡⠖⢋⡥⠀⠀⠀⠀⠀⠀⠀⢀⣤⣾⣿⡟⣿⡿⠁⠀⠙⢿⣿⣿⣿⣿⣿⠙⢿⣿⣿⣿⣿⣿⣶⣄⡀⠀⠀⠀⠀⠀⠈⠓⠁⠀⢉⠲⣍⠳⣄⠀⠀⠀⠀⠀
                                        ⠀⠀⢠⢮⣞⠕⣰⢫⠄⠈⠁⡴⠋⠰⠂⠀⠀⠀⠀⢀⣴⣿⣿⣿⡟⠀⣿⡃⠀⠀⠀⠈⣻⣿⣿⣿⣿⣇⣀⠻⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⢀⣀⡫⡕⢌⠣⡈⢣⡀⠀⠀⠀
                                        ⠀⢀⢾⣿⠏⡼⣵⠋⣠⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⠴⢺⡏⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⡇⠀⠉⠛⣿⣿⠹⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠈⠳⣝⢎⢮⢳⡙⢄⢱⣄⠀⠀
                                        ⠀⣞⣜⡏⣼⣽⠃⡼⢃⡴⠂⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⠋⠀⠘⠃⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⡇⠀⠀⠀⢘⣿⠷⣽⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠈⠈⠀⢀⠀⣈⢦⠽⡆⠀
                                        ⢼⢱⡍⠀⠃⠃⠸⢡⡟⠀⢠⡞⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⢇⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡇⣠⣤⣒⢍⣸⡀⠈⢿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⢀⢰⡘⣎⢧⠘⡎⣧⠹⡄
                                        ⢸⢠⠇⡞⢰⠀⡆⢠⠀⢀⠈⠤⠤⠶⠿⢟⣿⣿⣿⣿⣻⡿⠀⣈⠭⠶⣶⣤⣤⣀⠀⠀⠀⠀⠐⡶⠺⢫⡟⠁⣶⣶⡎⠙⢦⠘⣿⡏⣿⣿⣿⣿⣿⣧⡀⠀⠘⣆⢣⢸⠈⡆⢹⣹⡆⠇
                                        ⢸⢸⠀⡇⢿⢰⡇⣸⢀⡏⠀⡀⢀⡀⠀⣼⣿⣿⣿⣿⠻⣧⠞⠁⣾⣿⠆⠹⡄⠀⠙⡆⠀⠀⠀⠓⠊⡟⠀⠀⠙⠛⠁⠀⠈⡇⢿⢷⢿⣿⣿⣿⣿⣟⠛⠂⠀⠘⠘⠈⠀⠁⠈⠃⡇⡀
                                        ⢸⢸⡄⣇⢸⠸⡇⢻⠈⡇⢸⠇⠘⠀⢰⣿⣿⣿⣿⡏⠀⡇⠀⠀⠈⠁⠀⠀⡇⠀⢰⣣⠀⠀⠀⠀⠀⠸⣀⠀⠀⠀⠀⠀⢠⠃⠘⠈⢸⣿⣿⣿⣿⣿⡀⢀⡄⣶⠀⡆⠀⢰⠀⡇⡇⡇
                                        ⠸⡿⡇⡙⠘⠃⠃⠈⠀⣁⠈⡅⠀⣦⣿⣿⣿⣿⣿⣧⠀⢧⠀⠀⠀⠀⢀⠔⡇⠀⠸⡍⠀⡀⠀⠀⠀⠀⣌⡑⡖⠒⢲⠚⣁⠄⠀⠀⢸⣿⢏⣽⣿⣿⣧⢸⢡⠇⢸⠃⢀⡎⣰⢡⣧⠇
                                        ⠀⢹⣧⢹⡰⡄⣦⠀⣆⠸⡄⣹⣾⣿⣿⡿⣿⡿⣿⡟⠀⠀⠙⠒⠒⠋⠁⠀⠈⠒⠒⠃⠀⠈⠀⠀⠀⠀⠀⠸⠉⠉⠉⠏⠀⠀⠀⠀⣾⢣⡏⠸⣿⣿⣿⣧⣈⠀⠁⢀⠈⠀⣡⢫⠎⠀
                                        ⢦⡀⢫⢧⢣⡹⣜⢧⠘⢦⠹⣄⠳⡀⢳⢀⣿⣷⡝⣷⠀⠀⠀⠀⠀⠀⢀⣀⣤⠤⠖⠒⠚⠋⠉⠉⠉⠉⠉⠐⠒⡆⠤⣄⣀⠀⠀⢸⡏⣸⣓⢧⣿⡇⡴⢃⣞⡞⢠⠞⡼⣱⣣⠏⠀⠀
                                        ⠔⠛⠲⣽⣷⡳⡝⠎⠓⠀⠀⠀⠀⣄⠀⣼⣿⣿⣽⡞⡆⠀⠀⡠⡔⠊⠉⠀⠀⠀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⡀⠇⠀⡿⢸⠀⠀⣼⠕⢡⠏⡼⠿⣿⡤⠋⠋⠴⠣⢾⠞⣱⠋⠀⠀⠀
                                        ⡀⠀⠀⠀⢙⣷⣄⡀⢠⡀⢢⡙⢄⠘⢮⡉⢩⡿⣿⣿⣻⡄⠀⣿⣵⡠⣴⣾⡿⠋⢁⡠⠤⠒⠒⠒⠤⢄⡀⠈⠻⣿⣿⣳⠇⠀⢰⡟⠊⡡⣾⡣⣦⠞⣡⠞⣠⢄⡴⣠⠞⠁⠀⠀⠀⠀
                                        ⢈⣆⣴⡾⠛⠉⠻⢽⡲⣝⢦⡙⢦⣙⠂⠁⠀⠀⣬⣿⣿⣻⡄⠘⢿⣶⣿⠋⣠⣞⣁⣀⡤⠤⠤⠤⠤⠤⠬⣑⣄⣈⡻⠋⠀⢠⣿⣶⣫⢄⡠⢎⡡⠞⣥⣾⠕⣫⠞⠁⠀⠀⠀⠀⠀⠀
                                        ⣽⣿⣿⣷⣄⠀⠀⠀⠙⢮⡓⠬⣓⠎⢁⠀⢀⡲⣬⡻⠭⣲⡽⣆⠀⠙⢷⡋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡼⠊⠀⠀⣠⠟⣯⠘⢚⣩⢴⣫⢞⡴⢉⡤⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀
                                        ⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠉⠢⣌⠓⢬⣙⡲⢭⣓⡯⠽⠁⢀⡼⣳⣦⡀⠉⠑⠒⠤⠤⠤⠤⠤⠴⠒⠒⠉⠁⠀⢀⣤⡞⣡⢿⣻⢅⠐⠺⠽⣚⡭⠖⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                                        ⢿⣿⣿⣿⡻⣿⣿⣿⣦⡀⠀⠀⠈⠳⣄⠀⠉⠓⠪⠭⢍⣰⢷⣯⣗⣊⢹⣶⣤⣀⠀⠒⠒⠒⠒⠒⠚⠉⣀⣤⣾⡟⣇⡇⢨⣿⠮⣻⠯⠖⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                                        ⠀⠻⣿⣿⣿⣦⣍⡛⠻⢿⣦⡀⠀⠀⠀⠑⢤⡀⠀⠀⠀⠈⠙⠺⠯⠭⣼⠈⢻⣸⢿⢲⢢⢤⢤⢶⣶⣿⣿⣾⣿⠃⡼⡷⠒⠚⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                                        ⠀⠀⡈⠻⣿⣿⣿⣿⣷⣤⡹⣿⣦⣀⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⢸⠀⠀⢹⢼⢸⣸⢸⢸⢸⣿⡇⡟⡟⡣⠊⠀⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀">
                                        click me
                                    </button></p>
                                <p>Favorite Sports: ⚽ 🏂 🥊 👊</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Introduction