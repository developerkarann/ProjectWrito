import { useEffect, useRef, useState } from "react";
import {
    FaVoicemail,
    FaPhoneAlt,
    FaRegEnvelope,
    FaWhatsapp,
} from "react-icons/fa";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentForm = () => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState();

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                'QR Code is valid for ' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds) + ' minute'
            )
        }

        else {

            setTimer('The previous QR Code got expired');
            clearInterval(Ref.current);
        }
    }

    const clearTimer = (e) => {
        setTimer('10:00');

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
    const getDeadTime = () => {
        let deadline = new Date();

        deadline.setSeconds(deadline.getSeconds() + 600);
        return deadline;
    }
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    const onClickStart = (e) => {
        clearTimer(getDeadTime());
        window.my_modal_3.showModal()
    }


    const enrollmentFee = 1000;

    const [gst, useGst] = useState(0);
    const [totalPlay, setTotalPay] = useState(0);

    useEffect(() => {
        const percentGST = parseFloat((enrollmentFee * 0.18).toFixed(2));
        const sumOfTotal = enrollmentFee + percentGST;
        setTotalPay(sumOfTotal)
        useGst(percentGST);
    }, [])


    // const handleSubmitForm = (event) => {
    //     event.preventDefault();

    //     onClickStart()
    // }

    // Backend Api Integration >>>>>

    const [inputData, setInputData] = useState({
        studentName: "",
        email: "",
        number: "",
        program: "",
    })

    const setData = (e) => {
        // console.log(e.target.value)
        const { name, value } = e.target
        setInputData((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        toast("Please wait...", { toastId: "fetchResponse", autoClose: false });

        const { studentName, email, number, program } = inputData

        const response = await fetch('http://localhost:5000/api/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                studentName: studentName,
                email: email,
                number: number,
                program: program
            })
        })

        const data = await response.json();
        // console.log(data)
        if (response.status === 422 || !data) {
            toast.update('fetchResponse', {
                render: data.message,
                type: 'error',
                autoClose: 3000
            });
        } else {
            toast.update('fetchResponse', {
                render: data.message,
                type: 'success',
                autoClose: 3000
            });
            setInputData({ ...inputData, studentName: "", email: "", number: "", program: "" })
            onClickStart()
        }

    }


    return (
        <div className="hero min-h-screen bg-white mb-8">
            <div className="hero-content flex-col lg:flex-row">

                <div className="w-full lg:w-6/12 lg:text-left text-black">
                    <div className="flex items-center mb-8">
                        <div className="border-4 border-slate-500"><img src="https://i.ibb.co/X4q0YGv/1633933253987.jpg" className="h-16 w-20" alt="Writo" /></div>
                        <h4 className="ms-4 text-xl font-semibold">WRITO</h4>
                    </div>
                    <h3 className="text-3xl text-[#0d2366] font-semibold">Mentorship Program <br /> Enrollment</h3> <br />
                    <hr className="bg-green-500 w-10 h-2" /> <br />
                    <h1 className="text-xl font-semibold">Hey Learner!</h1>
                    <p>Finally that you're here give us a high-five! This is the Pre-final step to get into the Mentorship  Program (Live Online Course) and to start the learning journey and career with WRITO.</p> <br />
                    <h1 className="text-xl font-semibold">Fee breakup</h1>
                    <p>This is the Pre-enrollment fee, Our Support team will get in touch with you for remaining fee that has to be paid within 9-10 days of Pre-enrollment. Note- You'll be receiving all further intimations over your WhatsApp.</p> <br />
                    <br />
                    <h3 className="text-xl font-semibold">Contact Us:</h3>
                    <p className="flex items-center gap-x-1"><FaRegEnvelope></FaRegEnvelope> ravinder@writo.tech</p>
                    <p className="flex items-center gap-x-1"><FaPhoneAlt />+9518889372</p>
                    <p className="flex items-center gap-x-1"><FaWhatsapp />+8059458609</p>
                    <br />

                    <h1 className="text-xl font-semibold">Terms & Conditions:</h1>
                    <p>Course fee once Paid is not refundable for more details visit <a className="text-blue-500" href=""></a></p>
                    <p className="mt-4">You agree to share information entered on this page with Writo (owner of this page) and Razorpay, adhering to applicable laws.</p>

                    <hr className="mt-8 h-2" />

                    <div className="flex flex-col mt-4 text-blue-500">
                        <a className="hover:underline" href="https://merchant.razorpay.com/policy/MNwUQ1almK30Uz/terms">Terms and conditions</a>
                        <a className="hover:underline" href="https://merchant.razorpay.com/policy/MNwUQ1almK30Uz/privacy">Add Privacy and policies</a>
                        <a className="hover:underline" href="https://merchant.razorpay.com/policy/MNwUQ1almK30Uz/refund">Refund policies</a>
                        <a className="hover:underline" href="https://merchant.razorpay.com/policy/MNwUQ1almK30Uz/shipping">Shipping and delivery</a>
                    </div>


                    {/* 

                    <div className="mt-2">
                        <img src="https://i.ibb.co/X4q0YGv/1633933253987.jpg" className="h-8 w-16" alt="Writo" />
                        <p>Want to create page like this for your Business? Visit <br /> <a className="text-blue-500" href="">Razorpay Payment Pages</a> to get started</p>
                    </div> */}
                </div>

                <form className="card lg:ms-8 mx-2 w-full md:mx-0 lg:w-5/12 shadow-2xl bg-white">
                    <div className="p-8">
                        <h3 className="text-2xl font-semibold">Payment Details</h3>
                        <hr className="bg-green-500 w-10 h-2 mt-8" /> <br />
                        <div className="md:flex items-center justify-between">
                            <h4 className="md:text-[16px] mb-2 md:mb-0 text-[14px]">Student Name</h4>
                            <input value={inputData.studentName} onChange={setData} name="studentName" className="appearance-none bg-transparent text-black border border-[#e2e2e2] w-full md:ms-4 md:w-72 py-2 leading-tight  outline-green-400" id="text" type="text" required />
                        </div>

                        <div className="md:flex items-center justify-between mt-6">
                            <h4 className="md:text-[16px] mb-2 md:mb-0 text-[14px]">Email</h4>
                            <input value={inputData.email} onChange={setData} name="email" className="appearance-none border bg-transparent text-black border-[#e2e2e2] w-full md:ms-4 md:w-72 py-2 leading-tight  outline-green-400" id="email" type="email" required />
                        </div>

                        <div className="md:flex items-center justify-between mt-6">
                            <h4 className="md:text-[16px] mb-2 md:mb-0 text-[14px]">Number</h4>
                            <input value={inputData.number} onChange={setData} name="number" className="appearance-none border bg-transparent text-black border-[#e2e2e2] w-full md:ms-4 md:w-72 py-2 leading-tight  outline-green-400" id="number" type="number" required />
                        </div>

                        <div className="md:flex items-center justify-between mt-6">
                            <h4 className="md:text-[16px] mb-2 md:mb-0 text-[14px]">Live Program Selected</h4>
                            <select onClick={setData} name="program" className="select border bg-transparent text-black rounded-none border-[#e2e2e2] w-full md:ms-4 md:w-72 py-2" required>
                                <option selected>--Select--</option>
                                <option>Analytics & Data Science</option>
                                <option>Data Structure & Algorithm</option>
                                <option>Python Development</option>
                                <option>Android Development</option>
                                <option>MERN stack Development</option>
                                <option>Android App Development</option>
                                <option>Machine Learning</option>
                            </select>
                        </div>

                        <div className="md:flex items-center justify-between mt-6">
                            <h4 className="md:text-[16px] mb-2 md:mb-0 text-[14px]">Enrollment Fee <br /> including Gateway <br /> Charge</h4>
                            <input className="appearance-none border bg-transparent text-black border-[#e2e2e2] w-full md:ms-4 md:w-72 py-2 leading-tight pl-4 outline-green-400" id="number" type="number" disabled value={enrollmentFee} required />
                        </div>

                        <div className="md:flex items-center justify-between mt-6">
                            <h4 className="md:text-[16px] mb-2 md:mb-0 text-[14px]">GST</h4>
                            <input className="appearance-none border bg-transparent text-black border-[#e2e2e2] w-full md:ms-4 md:w-72 py-2 leading-tight pl-4 outline-green-400" id="number" type="text" disabled value={gst} required />
                        </div>

                    </div>

                    <div className="md:flex items-center justify-between bg-[#f5f6f7]">
                        {/* <div className="md:flex hidden gap-2 mx-2">
                            <img className="h-6 w-12" src="https://i.ibb.co/8cS08gX/images-1-removebg-preview-1.png" alt="" />
                            <img className="h-8 w-12" src="https://i.ibb.co/Z8XpVXg/visa-349221.png" alt="" />
                            <img className="h-6 w-12" src="https://i.ibb.co/0n0515F/maestro-217445.png" alt="" />
                            <img className="h-6 w-12" src="https://i.ibb.co/3vybWr4/ruble-10040420.png" alt="" />
                            <img className="h-6 w-12" src="https://i.ibb.co/7GX248v/download-7.png" alt="" />
                        </div> */}
                        <div className="h-15 ">
                            <button className="md:ms-2  bg-[#05ad11]  p-5 text-white font-bold w-full md:w-48" onClick={handleSubmit} ><input type="submit" value="Pay with QR  ₹" /> {totalPlay}</button>
                            <Link to="upi://pay?pa=writoeducationpvtltd@oksbi&pn=Writoeducationpvtltd&am=1180.00&cu=INR&aid=uGICAgMCysemQXg" >
                                <button className="md:ms-2  bg-[#05ad11]  p-5 text-white font-bold w-full md:w-48" onClick={handleSubmit} > Pay with UPI ₹ {totalPlay}</button>
                            </Link>
                        </div>
                    </div>

                </form>

                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <div className="flex flex-col md:flex-row h-[80vh] md:h-[250px] items-center gap-4">
                            <div>
                                <QRCode
                                    size={200}
                                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                    value='upi://pay?pa=writoeducationpvtltd@oksbi&pn=Writo%20education%20pvt%20ltd&am=1180.00&cu=INR&aid=uGICAgMCysemQXg'
                                    viewBox={`0 0 100 256`}
                                />
                            </div>
                            <div>
                                <p>Scan the QR using any UPI app on your phone</p>
                                <div className="flex justify-center">
                                    <img className="h-8 w-12" src="https://i.ibb.co/HdcNn0J/images-2-removebg-preview-1.png" alt="" />
                                    <img className="h-8 w-12" src="https://i.ibb.co/WGnTwK7/images-3-removebg-preview.png" alt="" />
                                    <img className="h-8 w-12" src="https://i.ibb.co/WP6Py6v/images-4-removebg-preview.png" alt="" />
                                    <img className="h-8 w-12" src="https://i.ibb.co/SPFczny/download-8-removebg-preview.png" alt="" />
                                </div>
                                <p className="text-center text-green-500 my-4 text-lg"> {timer} </p>
                            </div>
                        </div>
                    </form>
                </dialog>
            </div>
            <ToastContainer
                position="top-right"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={true}
                draggable={false}
                pauseOnHover={false}
                theme="colored"
            />
        </div>
    );
};

export default PaymentForm;