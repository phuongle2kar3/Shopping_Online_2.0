import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Footer extends Component {
    render() {
        return (
            <div className='align-bottom'>
                <div id='suport'>
                    <div id='detail1'>
                        TỔNG ĐÀI HỖ TRỢ (MIỄN PHÍ)
                    </div>
                    <div id='detail2'>
                        Gọi mua: 1800.1234 (8:00 - 21:00)<br />
                        CSKH:    1800.5678 (8:00 - 21:00)<br />
                        TTBH:    1800.6565 (8:00 - 21:00)
                    </div>


                </div>
                <div id='info'>
                    KẾT NỐI VỚI CHÚNG TÔI
                    <Link to='https://www.facebook.com/lhp231103/'><img src='facebook.png' alt="Logo"></img></Link>
                    <Link to='https://www.facebook.com/lhp231103/'><img src='instagram.png' alt="Logo"></img></Link>
                    <Link to='https://www.facebook.com/lhp231103/'><img src='tik-tok.png' alt="Logo"></img></Link>
                    <Link to='https://www.facebook.com/lhp231103/'><img src='youtube.png' alt="Logo"></img></Link>
                    <Link to='https://www.facebook.com/lhp231103/'><img src='gmail.png' alt="Logo"></img></Link>
                </div>
            </div>
        )
    }
}

export default Footer