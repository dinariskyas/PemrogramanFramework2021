import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import background from './background.png'

const HomeIndex = () => (
    <div>
        <div style={{ backgroundColor: '#F08080' }}>
            <br></br>
            <center><h2>SELAMAT DATANG DI SISTEM INFORMASI SIBUKU</h2></center>
            <hr></hr><br></br>
            <div style={{ backgroundColor: '#FAEBD7' }}></div>
        </div>
        <div style={{ backgroundColor: '#FAEBD7' }}>
            <br></br>
            <br></br>
            <center>
                <div className="container">
                    <table class="table-bordered" width="50%"><tr>
                        <td>
                            <img
                                src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1602300563/smysuqq6ioww9pjnzzgz.jpg"
                                width="120"
                                height="auto"
                                alt="content" />
                        </td>
                        <td>
                            <img
                                src="https://www.bukukita.com/babacms/displaybuku/111635_f.jpg"
                                width="120"
                                height="auto"
                                alt="content" />
                        </td>
                        <td>
                            <img
                                src="https://www.bukukita.com/babacms/displaybuku/91310_f.jpg"
                                width="120"
                                height="auto"
                                alt="content" />
                        </td>
                    </tr></table>
                    <table class="table-bordered" width="50%"><tr>
                        <td>
                            <img
                                src="https://i2.wp.com/kreativv.com/wp-content/uploads/2019/05/Buku-Biografi-Bagus-rekomendasi-kreativv-ID-2.jpg?resize=700%2C1045&ssl=1.jpg"
                                width="120"
                                height="auto"
                                alt="content" />
                        </td>
                        <td>
                            <img
                                src="https://ebooks.gramedia.com/ebook-covers/7713/big_covers/ID_PAS2013MTH09JFCKDBF_B.jpg"
                                width="120"
                                height="auto"
                                alt="content" />
                        </td>
                        <td>
                            <img
                                src="https://img.turmusi.id/12c955e7513ab21090ceef2abecd5473_large.jpg"
                                width="120"
                                height="auto"
                                alt="content" />
                        </td>
                    </tr></table>
                </div>
            </center>
            <br></br>
            <br></br>
        </div>
    </div>
)

export default HomeIndex