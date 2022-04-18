import React from 'react'
type Props = {
    handleClose: React.MouseEventHandler<HTMLButtonElement>
  };
 const ShopCardRequest = ({handleClose}:Props) => {
    
  return (
    <div className='shop-card-request'>
        <i className="fa fa-window-close" onClick={handleClose}/>
        برای خرید ابتدا ثبت نام کنید
        <div>
        <button className="btn btn-primary">ثبت نام</button>
        </div>
    </div>
  )
}
export default ShopCardRequest;
