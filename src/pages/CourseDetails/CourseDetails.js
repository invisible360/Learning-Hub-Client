import React from 'react';
import { FaClipboardList, FaRegPlayCircle } from 'react-icons/fa';
import { MdAccessTime, MdLanguage } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TbFileCertificate } from "react-icons/tb";
import { SiGnuprivacyguard } from "react-icons/si";
import { VscFilePdf } from "react-icons/vsc";
import { Link, useLoaderData } from 'react-router-dom';
import { FcPrivacy } from 'react-icons/fc';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Lectures from './Lectures';
import jsPDF from 'jspdf';
import ScrollToTop from 'react-scroll-to-top';

const CourseDetails = () => {

    const courseDetails = useLoaderData();
    // console.log(courseDetails);
    const { title, overview, instructor, others_info, id } = courseDetails;

    const generatePDF = () => {
        const doc = new jsPDF('p', 'pt', 'a4');
        doc.text(`Course ID:- ${id}`, 30, 50);
        doc.text(`Title:- ${title}`, 30, 70);

        const lines = doc.splitTextToSize(`Description:- ${overview.description}`, 550)
        doc.text(30, 100, lines);

        doc.text(`Application:`, 30, 250);


        let temp = 260;
        for (let i = 0; i < overview.oportunies.length; i++) {
            const opp = overview.oportunies[i];
            doc.text(30, temp += 20, `\u2022 ${opp}`)
            // console.log(temp+=20);
        }

        doc.text(`Topics Covered:`, 30, 530);
        let temp2 = 540;
        for (let i = 0; i < overview.topic_covered.length; i++) {
            const top = overview.topic_covered[i];
            doc.text(30, temp2 += 20, `\u2022 ${top}`)
            // console.log(temp+=20);
        }

        doc.addImage(`${instructor.img}`, 'JPEG', 30, 750, 80, 80)
        doc.text(`Instructor:${instructor.name}`, 115, 770);
        doc.text(`Language:${overview?.Language}`, 115, 790);
        doc.text(`Published On:${overview?.publishedDate}`, 115, 810);


        doc.save(`Course-${id}-pdf.pdf`);

        //use of html2canvas
        /* doc.html(document.querySelector("#pdf"), {
            callback: function (pdf) {
                const pageCount = doc.internal.getNumberOfPages();
                pdf.deletePage(pageCount);
                pdf.save("mypdf.pdf");
            }
        }); */

    };

    return (
        <div>
            <div className='py-1'></div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center my-5 text-accent">Sample Certificate</h3>
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-achievement-design-template-58b46df635d246b8041a406332c7dcf2_screen.jpg?ts=1613737021" alt="" srcSet="" />
                    <div className="modal-action justify-center">
                        <label htmlFor="my-modal-6" className="btn btn-accent">Ok!</label>
                    </div>
                </div>
            </div>


            <main className='grid grid-cols-1 md:grid-cols-12 gap-5 m-10'>
                <section className='md:col-span-8 mt-10 md:mt-0'>
                    <div className="md:indicator">
                        <div className="indicator-item indicator-top">

                            <button onClick={generatePDF} className="hidden md:block btn btn-warning text-black"><VscFilePdf className='text-3xl' /></button>
                        </div>

                        <div>
                            <div id='pdf' className="card w-full bg-base-100 shadow-xl">
                                <div className='h-80 bg-gradient-to-r from-sky-500 to-indigo-500'>
                                    <div className='w-full md:w-3/4'>
                                        <div className='flex items-center p-2 md:p-0'>
                                            <h1 className='text-xl md:text-4xl font-bold md:p-4 text-white'>{title}</h1>
                                            <button onClick={generatePDF} className="md:hidden block btn btn-sm text-white"><VscFilePdf className='text-xl' /></button>
                                        </div>
                                        <h1 className='text-sm md:text-lg p-2 md:px-4 text-white'>{overview?.motto}</h1>
                                    </div>

                                    <div className='p-4 my-2'>
                                        <div className='flex items-center text-white mb-1'>
                                            <img className='w-10 rounded-full' src={instructor?.img} alt=''></img> <span className='ml-2'>{instructor?.name}</span>
                                        </div>
                                        <div className='flex items-center text-white mb-1'>
                                            <MdLanguage />
                                            <span className='ml-2'>Language - {overview?.Language}</span>
                                        </div>
                                        <div className='flex items-center text-white mb-1'>
                                            <SlCalender className='text-white' />
                                            <span className='ml-2'>Published On - {overview?.publishedDate}</span>
                                        </div>
                                    </div>
                                </div>

                                <Tabs>
                                    <TabList>
                                        <Tab><span className='font-bold'>Lectures</span></Tab>
                                        <Tab><span className='font-bold'>Overview</span></Tab>
                                    </TabList>

                                    <TabPanel>
                                        {
                                            overview.lectures_videos_topics.map(topic => <Lectures key={topic.id} topic={topic}></Lectures>)
                                        }

                                    </TabPanel>
                                    <TabPanel>
                                        <div className="card-body">
                                            <h2 className="card-title">Description</h2>
                                            <p className='w-[16rem] md:w-[52rem]'>{overview.description}</p>

                                            <h2 className="card-title mt-3">Applications</h2>
                                            {
                                                overview.oportunies.map((opp, index) => <li key={index}>{opp}</li>)
                                            }
                                            <h2 className="card-title mt-3">Topics Covered</h2>
                                            {
                                                overview.topic_covered.map((top, index) => <li key={index}>{top}</li>)
                                            }
                                            <h2 className="card-title mt-3">Who this course for?</h2>
                                            {
                                                overview.course_for.map((cfor, index) => <li key={index}>{cfor}</li>)
                                            }
                                            <h2 className="card-title mt-3">What will I get?</h2>
                                            {
                                                overview.benefits.map((benf, index) => <li key={index}>{benf}</li>)
                                            }
                                            <h2 className="card-title mt-3">Requirements</h2>
                                            {
                                                overview.requirements.map((req, index) => <li key={index}>{req}</li>)
                                            }

                                        </div>
                                    </TabPanel>
                                </Tabs>

                            </div>
                        </div>
                    </div>
                </section>


                <section className='order-first md:order-last md:col-span-4'>
                    <div className="sticky top-0  card bg-base-100 shadow-xl">
                        <figure><img src={overview?.image_url} alt="" /></figure>
                        <p className='m-3 text-xl font-semibold'><span className='text-blue-600'>Course Title:</span> {title}</p>
                        <div className="card-body">
                            <h2 className="card-title">
                                This Course includes:
                            </h2>
                            <div className='flex items-center'>
                                <MdAccessTime className='text-3xl' />
                                <span className='ml-5'>{others_info?.hours} hours</span>
                            </div>
                            <div className='flex items-center'>
                                <TbFileCertificate className='text-3xl' />
                                <span className='ml-5'> Completion Certificate</span>
                                <label htmlFor="my-modal-6" className="btn modal-button btn-outline btn-xs ml-5">sample</label>
                            </div>
                            <div className='flex items-center'>
                                <FaRegPlayCircle className='text-3xl' />
                                <span className='ml-5'>{others_info?.lectures} Lectures</span>
                            </div>
                            <div className='flex items-center'>
                                <FaClipboardList className='text-3xl' />
                                <span className='ml-5'>1 Resources</span>
                            </div>
                            <div className='flex items-center'>
                                <SiGnuprivacyguard className='text-3xl' />
                                <span className='ml-5'>Lifetime Access</span>
                            </div>
                            <Link to={`/checkout/${id}`} className='btn btn-success text-white my-5'><FcPrivacy className='text-2xl mr-4' />Get Premium Access</Link>
                        </div>
                    </div>
                </section>

                <ScrollToTop smooth width="40"color='red' style={{backgroundColor: 'cyan'}}/>
            </main>
        </div>
    );
};

export default CourseDetails;