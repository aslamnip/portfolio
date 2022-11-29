/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
// import { Fade } from 'react-awesome-reveal';
import "./PersonalInfo.css"
import "animate.css"


function PersonalInfo() {

    // set info
    const [info, setInfo] = useState(false);
    let personalInfo;
    // button handale
    const handleInfo = () => {
        setInfo(!info)
    }


    const bio =
        <div>
            <table>
                <thead>

                    <tr>
                        <td>Name</td>
                        <td id='dotted'> :</td>
                        <td>Md Aslam Sider.</td>
                    </tr>
                    <tr>
                        <td>Date Of Birth</td>
                        <td id='dotted'>:</td>
                        <td>08 October, 1999.</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td id='dotted'>:</td>
                        <td>Barishal, Bangladesh.</td>
                    </tr>
                    <tr>
                        <td>Nationality</td>
                        <td id='dotted'>:</td>
                        <td>Bangladeshi.</td>
                    </tr>
                    <tr>
                        <td>Learning Source</td>
                        <td id='dotted'>:</td>
                        <td> Udemy & Youtube - <br /> Learn with Sumit,  Jhankar Mahbub, Anisul Islam , Moshiur, Rasel , <br /> Net Ninja.</td>
                    </tr>
                    <tr>
                        <td>Academic Qualification </td>
                        <td id='dotted'>:</td>
                        <td> Department Of English, <br />Honours Part 4,<br />  National University.</td>
                    </tr>
                </thead>
            </table>

            <table className='twoTable '>
                <thead>
                    <tr>
                        <th className='text-left'>Exam</th>
                        <th>Borad</th>
                        <th>GPA</th>
                        <th>Group</th>
                        <th>Year</th>

                    </tr>
                    <tr>
                        <td>S.S.C</td>
                        <td>Barishal</td>
                        <td>4.67/ 5</td>
                        <td>Science</td>
                        <td>2015</td>
                    </tr>
                    <tr>
                        <td>H.S.C</td>
                        <td>Barishal</td>
                        <td>4.00 /5</td>
                        <td>Science</td>
                        <td>2017</td>
                    </tr>
                </thead>
            </table>

        </div>

    // button name
    let buttonName;
    info ? buttonName = "Hide Info" : buttonName = "See Personal info"

    // info elemtts 
    if (info) {
        personalInfo = <div className='animate__animated animate__jello' > {bio}</div>


    }
    else {
        personalInfo = <div className='animate__animated animate__zoomOut'> Hideing...
        </div>

    }


    return (
        <div className='text-center personalInfoMainDiv'>
            <button style={{ width: "200px", transition: "2s" }} className='buttomMoreInfo mt-5' onClick={handleInfo} type='button'> {buttonName}</button>
            <br />
            {personalInfo}
        </div>
    );
}



export default PersonalInfo;