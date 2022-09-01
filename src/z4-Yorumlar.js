import React from 'react';

 const z4Yorumlar = ({avatar, isim, mesaj, gun}) => {
  return (
    <div className='yorum d-flex'>
        <div className='sol col-md-2'>
            <div className='isim'>{isim}</div>
            <div className='avatar'><img src={avatar} alt='' /></div>
            <div className='tarih'>{gun} gün önce</div>
        </div>
        <div className='sag col-md-10'>{mesaj}</div>
    </div>
  )
}

export default z4Yorumlar;
