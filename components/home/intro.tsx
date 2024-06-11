import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export default function Intro() {
    return <Dialog>
    <DialogTrigger asChild>
      <button className="w-[50%] pr-3 lg:pr-6 text-end border-r-2 border-red-500"><span className="uppercase text-sm lg:text-2xl text-red-600 font-bold">Giới thiệu</span></button>
    </DialogTrigger>
    <DialogContent style={{ backgroundImage: `url(images/background.svg)` }} className="!rounded-2xl w-screen lg:w-[500px]">
      <div className="relative flex flex-col justify-center items-center">
        <div className="absolute -top-11 landing-popup-header rounded-[33px] py-2 px-8">
          <div className="title uppercase text-red-600">giới thiệu</div>
        </div>

        <div className="p-2 text-sm max-h-[80vh] overflow-y-auto scrollbar-none">

          <p className="my-1 text-lg font-semibold">Chào mừng bạn đến với MB66VI Công Ty TNHH Truyền Thông Giải Trí MB66VN!</p>

          <p>
            Tại MB66VI, chúng tôi tự hào là đơn vị hàng đầu trong lĩnh vực Công nghệ thông tin và truyền thông,
            chuyên cung cấp các giải pháp và dịch vụ tối ưu cho doanh nghiệp vừa và nhỏ.
            Với sứ mệnh hỗ trợ khách hàng chuyển đổi số và thực hiện các chiến dịch truyền thông,
            marketing hiệu quả, chúng tôi cam kết mang đến giá trị vượt trội và sự phát triển bền vững.
          </p>

          <p className="my-1 text-lg font-semibold">Sứ mệnh và Tầm nhìn</p>

          <p>
            MB66VI hướng đến mục tiêu trở thành đối tác đáng tin cậy,
            giúp các doanh nghiệp vừa và nhỏ tiếp cận và ứng dụng công nghệ tiên tiến vào hoạt động kinh doanh.
            Chúng tôi tin rằng, bằng cách cung cấp các dịch vụ chuyển đổi số toàn diện,
            quảng cáo đa nền tảng, truyền thông chiến lược, dịch vụ SEO web,
            và thiết kế sáng tạo, chúng tôi có thể giúp khách hàng không chỉ duy trì mà còn phát triển mạnh mẽ trong môi trường kinh doanh cạnh tranh hiện nay.
          </p>

          <p className="my-1 text-lg font-semibold">Dịch vụ và Sản phẩm chính</p>

          <p>
            Chuyển đổi số: Tư vấn và triển khai các giải pháp số hóa giúp doanh nghiệp nâng cao hiệu quả vận hành và quản lý.
            Quảng cáo đa nền tảng: Chiến lược quảng cáo trên các kênh truyền thông xã hội, tìm kiếm, và hiển thị để tiếp cận đối tượng khách hàng mục tiêu.
            Truyền thông: Xây dựng và quản lý chiến dịch truyền thông tổng thể nhằm nâng cao nhận thức và hình ảnh thương hiệu.
            Dịch vụ SEO web: Tối ưu hóa công cụ tìm kiếm để cải thiện thứ hạng website và tăng cường lưu lượng truy cập tự nhiên.
            Thiết kế: Thiết kế đồ họa và giao diện người dùng (UI/UX) để tạo ra các sản phẩm số bắt mắt và dễ sử dụng.

          </p>

          <p className="my-1 text-lg font-semibold">Chính sách quan trọng</p>

          <p>
            An toàn và Bảo mật:
            Chúng tôi cam kết bảo vệ thông tin của khách hàng bằng các biện pháp an ninh tiên tiến và quy trình quản lý dữ liệu nghiêm ngặt.
            Hỗ trợ nhanh chóng:
            Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ và giải quyết các vấn đề của khách hàng một cách nhanh chóng và hiệu quả.
          </p>
        </div>
      </div>
    </DialogContent>
  </Dialog>
}