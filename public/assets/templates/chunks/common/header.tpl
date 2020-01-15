<header class="row position-relative">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-12 col-lg-auto">
                <div class="row align-items-center justify-content-between">
                    <div class="col-auto">
                        <a href="/">
                            <img src="/assets/design/images/logo.png" alt="logo">
                        </a>
                    </div>
                    <div class="col-lg-auto d-none d-lg-block">
                        [[$address]]
                    </div>
                    <div class="col-auto d-lg-none">
                        <a href="#menu-mobile" class="menu-mobile-toggle">
                            <img src="assets/design/images/mobile/9.png" alt="">
                            <img class='close' src="assets/design/images/mobile/1.png" alt="">
                        </a>
                    </div>
                    
                </div>
            </div>
            
            <div class="col-lg-auto menu-mobile" id="menu-mobile">
                <div class="row d-lg-none block-white">
                    <div class="mobile-menu col-12 ">
                        <div class="row">
                            <div class="col-12 menu">
                                [[$menu]]
                            </div>
                            
                            <div class="col-12 mt-2 d-lg-none">
                                [[$diller-make]]
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="row justify-content-end align-items-center  block-grey">
                    
                    <div class="col-lg-auto d-lg-none">
                        <p class="capt">Адрес</p>
                        [[$address]]
                    </div>
                    
                    
                    <div class="col-auto d-none d-lg-block order-lg-1">
                        [[$diller-make]]
                    </div>
                    
                    <div class="col-lg-3  order-lg-3">
                        <div class="row">
                            <div class="col-12">
                                <p class="d-lg-none capt">Телефон</p>
                                <p>[[++phone]]</p>
                            </div>
                            <div class="col-12">
                                <p class="d-lg-none capt">Почта</p>
                                <p>[[++email]]</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-auto order-lg-2">
                        <p class="d-lg-none capt">Социальные сети:</p>
                        <div class="row socials-links mb-lg-0 mb-3">
                            [[$socials]]
                        </div>
                    </div>
                    <div class="col-lg-auto  order-lg-4">
                        <a href="#modal-call" data-toggle="modal" class="btn btn-outline-success">заказать звонок</a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <div class="container menu-desktop d-none d-lg-block">
         [[$menu]]
    </div>
</header>