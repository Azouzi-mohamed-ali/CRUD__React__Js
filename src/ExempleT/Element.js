function Element({p}) {
    return ( 
       
        <div data-reflow-type="product" data-reflow-product="750216531">
          <div className="reflow-product">
            <div className="ref-media">
              <div className="ref-preview">
                <img className="ref-image active" src={p.imageartpetitf} data-reflow-preview-type="image"/>
                <img className="ref-image" src="https://media.mytek.tn/media/wysiwyg/cms/Telephonie/smartphone-mobile/Iphone-.jpg" data-reflow-preview-type="image"/>
                <img className="ref-image" src="https://www.tunisianet.com.tn/190865-large/telephone-portable-umidigi-bison-4g-double-sim-etanche-noir.jpg" data-reflow-preview-type="image"/></div>
                <div className="ref-thumbnails">
                  <div className="ref-thumbnail">
                    <div className="ref-image active" data-reflow-preview-type="image" data-reflow-preview="undefined" style={{
                backgroundImage: `url(${p.imageartpetitf})` 
                }}></div></div><div className="ref-thumbnail">
                      <div className="ref-image" data-reflow-preview-type="image" data-reflow-preview="undefined" style={{
                backgroundImage: `url("https://media.mytek.tn/media/wysiwyg/cms/Telephonie/smartphone-mobile/Iphone-.jpg")` 
                }}></div>
                      </div>
                      <div className="ref-thumbnail">
                        <div className="ref-image" data-reflow-preview-type="image" data-reflow-preview="undefined" style={{
                backgroundImage: `url("https://www.tunisianet.com.tn/190865-large/telephone-portable-umidigi-bison-4g-double-sim-etanche-noir.jpg")` 
                }}></div></div></div></div>
                        <div className="ref-product-data">
                          <h2 className="ref-name">Android</h2>
                          <strong className="ref-price">€1,500.00</strong>
                          <span data-reflow-type="add-to-cart" data-reflow-product="750216531"><div className="ref-product-controls"><span data-reflow-product="750216531" data-reflow-max-qty="999" data-reflow-quantity="1">
              <div className="ref-quantity-widget">
                  <div className="ref-decrease"><span></span></div>
                  <input type="text" value="1"/>
                  <div className="ref-increase"><span></span></div>
              </div>
          </span><a href="#" className="ref-button">Add to Cart</a></div></span><div className="ref-description"><p>Android version</p>
          </div></div></div></div>
     
     );
}

export default Element;