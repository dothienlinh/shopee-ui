import classNames from 'classnames/bind'
import styles from './FooterSection.module.scss'
import { Link } from 'react-router-dom'
import { monthSale } from '@/data'
import { Fragment } from 'react'
import { Container } from 'react-bootstrap'

const cx = classNames.bind(styles)

function FooterSection() {
  return (
    <Container>
      <section className={cx('footer_section')}>
        <h1 className={cx('footer_section_heading')}>
          SHOPEE - GÌ CŨNG CÓ, MUA HẾT Ở SHOPEE
        </h1>
        <p className={cx('footer_section_content')}>
          Shopee - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và miễn
          phí! Shopee là nền tảng giao dịch trực tuyến hàng đầu ở Đông Nam Á, có
          trụ sở chính ở Singapore, đã có mặt ở khắp các khu vực{' '}
          <b>Singapore</b>,<b>Malaysia</b>, <b>Indonesia</b>, <b>Thái Lan</b>,{' '}
          <b>Philippines</b>, <b>Đài Loan</b>, <b>Brazil</b>,{' '}
          <b>México & Colombia</b>. Với sự đảm bảo của Shopee, bạn sẽ mua hàng
          trực tuyến an tâm và nhanh chóng hơn bao giờ hết!
        </p>

        <br />

        <h1 className={cx('footer_section_heading')}>
          MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN
        </h1>
        <p className={cx('footer_section_content')}>
          Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến thì
          Shopee.vn là một sự lựa chọn tuyệt vời dành cho bạn. Shopee là trang
          thương mại điện tử cho phép người mua và người bán tương tác và trao
          đổi dễ dàng thông tin về sản phẩm và chương trình khuyến mãi của shop.
          Do đó, việc mua bán trên Shopee trở nên nhanh chóng và đơn giản hơn.
          Bạn có thể trò chuyện trực tiếp với nhà bán hàng để hỏi trực tiếp về
          mặt hàng cần mua. Còn nếu bạn muốn tìm mua những dòng sản phẩm chính
          hãng, uy tín,{' '}
          <Link to={'/mall'} className={cx('footer_section_link')}>
            Shopee Mall
          </Link>{' '}
          chính là sự lựa chọn lí tưởng dành cho bạn. Để bạn có thể dễ dàng khi
          tìm hiểu và sử dụng sản phẩm,{' '}
          <Link to={'/blog'} className={cx('footer_section_link')}>
            Shopee Blog - trang blog thông tin chính thức của Shopee
          </Link>{' '}
          - sẽ giúp bạn có thể tìm được cho mình các kiến thức về xu hướng thời
          trang, review công nghệ, mẹo làm đẹp, tin tức tiêu dùng và deal giá
          tốt bất ngờ.
        </p>
        <br />
        <p className={cx('footer_section_content')}>
          Đến với Shopee, cơ hội để trở thành một nhà bán hàng dễ dàng hơn bao
          giờ hết. Chỉ với vài thao tác trên ứng dụng, bạn đã có thể đăng bán
          ngay những sản phẩm của mình. Không những thế, các nhà bán hàng có thể
          tự{' '}
          <Link to={'/edu/article/119'} className={cx('footer_section_link')}>
            tạo chương trình khuyến mãi trên Shopee
          </Link>{' '}
          để thu hút người mua với những sản phẩm có mức giá hấp dẫn. Khi đăng
          nhập tại Shopee Kênh người bán, bạn có thể dễ dàng phân loại sản phẩm,
          theo dõi đơn hàng, chăm sóc khách hàng và cập nhập ngay các hoạt động
          của shop.
        </p>
        <br />
        <p className={cx('footer_section_content')}>
          Bên cạnh đó, Shopee hợp tác với nhiều đơn vị vận chuyển uy tín trên
          thị trường như{' '}
          <Link to={'/spx'} className={cx('footer_section_link')}>
            SPX
          </Link>{' '}
          ... nhằm cung cấp dịch vu giao nhận và vận chuyển tiện lợi cho cả
          khách hàng và người bán. Cùng với nhiều ưu đãi với chi phí giao hàng
          hợp lý, Shopee đảm bảo cho khách hàng trải nghiệm mua sắm thuận tiện
          nhất.
        </p>

        <br />

        <h1 className={cx('footer_section_heading')}>
          TẢI ỨNG DỤNG SHOPEE NGAY ĐỂ MUA BÁN ONLINE MỌI LÚC, MỌI NƠI
        </h1>
        <p className={cx('footer_section_content')}>
          Ưu điểm của ứng dụng Shopee là cho phép bạn mua và bán hàng mọi lúc,
          mọi nơi. Bạn có thể tải ứng dụng Shopee cũng như đăng sản phẩm bán
          hàng một cách nhanh chóng và tiện lợi. Ngoài ra, ứng dụng Shopee còn
          có những ưu điểm sau:
        </p>
        <ul className={cx('footer_section_menu')}>
          <li
            className={cx('footer_section_content', 'footer_section_menu_item')}
          >
            Giao diện thân thiện, đơn giản, dễ sử dụng. Bạn sẽ dễ dàng thấy được
            ngay những sản phẩm nổi bật cũng như dễ dàng tìm đến các ô tìm kiếm,
            giỏ hàng hoặc tính năng chat liền tay.
          </li>
          <li
            className={cx('footer_section_content', 'footer_section_menu_item')}
          >
            Ứng dụng tích hợp công nghệ quản lý đơn mua và bán hàng tiện lợi
            trên cùng một tài khoản. Bạn sẽ vừa là người mua hàng, vừa là người
            bán hàng rất linh hoạt, dễ dàng.
          </li>
          <li
            className={cx('footer_section_content', 'footer_section_menu_item')}
          >
            Cập nhập thông tin khuyến mãi,{' '}
            <Link to={'/flash_sale'} className={cx('footer_section_link')}>
              Shopee Flash Sale
            </Link>{' '}
            nhanh chóng và liên tục.
          </li>
        </ul>
        <p className={cx('footer_section_content')}>
          Tại Shopee, bạn có thể lưu các{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            mã giảm giá
          </Link>
          ,{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            Voucher Xtra
          </Link>{' '}
          và{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            mã miễn phí vận chuyển
          </Link>{' '}
          toàn quốc. Bên cạnh đó, Shopee cũng sẽ có những chiến dịch khuyến mãi
          lớn hằng năm như{' '}
          {monthSale.map((item) => (
            <Fragment key={item.id}>
              <Link to={'/'} className={cx('footer_section_link')}>
                Sale {item.month}
              </Link>
              ,{' '}
            </Fragment>
          ))}
          <Link to={'/'} className={cx('footer_section_link')}>
            Sale Sinh Nhật 12.12
          </Link>
          ;{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            Khuyến Mãi Tết
          </Link>{' '}
          thả ga săn sale{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            quà Tết
          </Link>{' '}
          chất lượng. Đây là thời điểm để người mua hàng có thể nhanh tay chọn
          ngay cho mình những mặt hàng ưa thích với mức giá giảm kỉ lục. Ngoài
          ra, bạn còn có thể thỏa thích săn sale vào các ngày trong tháng như{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            Sale giữa tháng
          </Link>{' '}
          và{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            Sale cuối tháng
          </Link>{' '}
          đón lương về, hoặc đón xem{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            Shopee Live
          </Link>{' '}
          để săn hàng ngàn deal hời giá sốc.
        </p>

        <br />

        <h1 className={cx('footer_section_heading')}>
          MUA HÀNG HIỆU CAO CẤP GIÁ TỐT TẠI SHOPEE
        </h1>
        <p className={cx('footer_section_content')}>
          Bên cạnh{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            Shopee Premium
          </Link>
          , Shopee còn có rất nhiều khuyến mãi khủng cho{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            hàng hiệu giảm đến 50%
          </Link>
          . Cộng với mã giao hàng miễn phí, Shopee cũng có các mã giảm giá được
          phân phối mỗi tháng từ rất nhiều gian hàng chính hãng tham gia chương
          trình khuyến mãi này. Bên cạnh đó, Shopee còn tập hợp rất nhiều thương
          hiệu đình đám được các nhà bán lẻ uy tín phân phối bán trên Shopee,{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            top sản phẩm hot deal cho bạn săn sale
          </Link>{' '}
          luôn cập nhật mỗi giờ, mỗi ngày, đem đến cho bạn sự lựa chọn đa dạng,
          từ các hãng mỹ phẩm nổi tiếng hàng đầu như{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            Kiehl's
          </Link>
          ,{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            MAC
          </Link>
          ,{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            Foreo
          </Link>
          ,{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            SK-II
          </Link>
          ,{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            Estee Lauder
          </Link>
          ,... Đến những thương hiệu công nghệ nổi tiếng như:{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            camera hành trình Gopro
          </Link>
          ,{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            máy ảnh Fuifilm
          </Link>
          ,{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            webcam Hikvision
          </Link>
          ,{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            máy đọc sách Kindle
          </Link>
          ,... Tại Shopee, bạn có thể dễ dàng tìm thấy các thương hiệu giày thể
          thao phổ biến hiện nay như:{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            New Balance
          </Link>
          ,{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            Nike
          </Link>
          ,{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            Vans
          </Link>
          ,{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            Crocs
          </Link>
          ,...{' '}
        </p>

        <br />

        <h1 className={cx('footer_section_heading')}>
          MUA HÀNG CHÍNH HÃNG TỪ CÁC THƯƠNG HIỆU LỚN VỚI SHOPEE
        </h1>
        <p className={cx('footer_section_content')}>
          Mua hàng trên Shopee luôn là một trải nghiệm ấn tượng. Dù bạn đang có
          nhu cầu mua bất kỳ mặt hàng{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            thời trang nam
          </Link>
          ,{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            thời trang nữ
          </Link>
          ,{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            đồng hồ
          </Link>
          ,{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            điện thoại
          </Link>
          ,{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            máy tính & laptop
          </Link>
          ,... thì Shopee cũng sẽ đảm bảo cung cấp cho bạn những sản phẩm ưng ý.
          Bên cạnh đó, Shopee cũng có sự tham gia của các thương hiệu hàng đầu
          thế giới ở đa dạng nhiều lĩnh vực khác nhau. Trong đó có thể kể đến
          Samsung, OPPO, Xiaomi, Innisfree, Unilever, P&G, Biti’s,...Các thương
          hiệu này hiện cũng đã có cửa hàng chính thức trên Shopee Mall với hàng
          trăm mặt hàng chính hãng, được cập nhập liên tục. Là một kênh bán hàng
          uy tín, Shopee luôn cam kết mang lại cho khách hàng những trải nghiệm
          mua sắm online giá rẻ, an toàn và tin cậy. Mọi thông tin về người bán
          và người mua đều được bảo mật tuyệt đối. Các hoạt động giao dịch thanh
          toán tại Shopee luôn được đảm bảo diễn ra nhanh chóng, an toàn. Một
          vấn đề nữa khiến cho các khách hàng luôn quan tâm đó chính là mua hàng
          trên Shopee có đảm bảo không.
        </p>
        <p className={cx('footer_section_content')}>
          Shopee luôn cam kết mọi sản phẩm trên Shopee, đặc biệt là Shopee Mall
          đều là những sản phẩm chính hãng, đầy đủ tem nhãn, bảo hành từ nhà bán
          hàng. Ngoài ra, Shopee bảo vệ người mua và người bán bằng cách giữ số
          tiền giao dịch đến khi người mua xác nhận đồng ý với đơn hàng và không
          có yêu cầu khiếu nại, trả hàng hay hoàn tiền nào. Thanh toán sau đó sẽ
          được chuyển đến cho người bán. Đến với Shopee ngay hôm nay để mua hàng
          online giá rẻ và trải nghiệm dịch vụ chăm sóc khách hàng tuyệt vời tại
          đây. Đặc biệt khi mua sắm trên Shopee Mall, bạn sẽ được miễn phí vận
          chuyển, giao hàng tận nơi và 7 ngày miễn phí trả hàng. Ngoài ra, khách
          hàng có thể sử dụng{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            Shopee Xu
          </Link>{' '}
          để đổi lấy mã giảm giá có giá trị cao và voucher dịch vụ hấp dẫn. Tiếp
          đến là{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            Shopee Home Club
          </Link>
          ,{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            Shopee Mum Club
          </Link>
          ,{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            Shopee Beauty Club
          </Link>{' '}
          và{' '}
          <Link to={'/'} className={cx('footer_section_link')}>
            Shopee Book Club
          </Link>{' '}
          với các ưu đãi độc quyền từ các thương hiệu lớn có những khách hàng đã
          đăng ký làm thành viên. Hãy truy cập ngay Shopee Việt Nam hoặc tải
          ngay ứng dụng Shopee về điện thoại ngay hôm nay!{' '}
        </p>

        <br />

        <h1 className={cx('footer_section_heading')}>
          TOP THƯƠNG HIỆU NỔI BẬT
        </h1>
        <p className={cx('footer_section_content')}>
          Philips | Deerma | L'Oréal | Kiehl's | Kappa | Juno | Converse |
          Biti's | Owen | Pedro | New Balance | adidas | Samsung | Sunhouse |
          Xiaomi | Oreo | Nike | Pantio | Supreme | PUMA | Kindle | DHC |
          Transino | Martiderm | Paula’s Choice | The Ordinary | KitKat | Teelab
          | SomeHow | Elise | YODY | Coolmate | MARC Fashion | Vergency | Scott
          Platon | GUMAC | Vascara | MWC | Shondo | CANIFA | Sablanca | OLV
          Boutique | Pandora | Dottie | Skin Aqua | SkinCeuticals | Pediasure |
          Abbott Grow | Obagi Beauty | L'Amour Paris
        </p>

        <br />

        <h1 className={cx('footer_section_heading')}>TOP TỪ KHÓA XU HƯỚNG</h1>
        <p className={cx('footer_section_content')}>
          áo hoodie | áo giữ nhiệt | áo khoác nam | khăn quàng cổ | kẽm nhung |
          đèn sưởi nhà tắm | cây thông noel | ông già noel | trang trí noel |
          thiệp giáng sinh | trang trí cây thông noel | decan dán kính noel |
          decan trang trí noel | quà noel cho bé | đồ trang trí noel | decal dán
          tường trang trí noel | thiệp nổi giáng sinh | quà noel cho người yêu |
          dây trang trí noel | đồ noel | bánh kem cây thông | cây thông noel
          mini | bánh kem noel | bánh kem ông già noel | bánh kem noel mini |
          quà noel cho bạn gái | decal 2 mặt trang trí noel | bông tai noel |
          giày noel cho bé trai | kẹo noel | đèn trang trí noel | dây kim tuyến
        </p>
      </section>
    </Container>
  )
}

export default FooterSection
