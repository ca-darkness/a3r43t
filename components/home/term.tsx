import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export default function Term() {
    return <Dialog>
        <DialogTrigger asChild>
            <button className="w-[50%] text-start pl-3 lg:pl-6 border-l-2 border-red-500"><span className="uppercase text-sm lg:text-2xl text-red-600 font-bold">Chính sách bảo mật</span></button>
        </DialogTrigger>
        <DialogContent style={{ backgroundImage: `url(images/background.svg)` }} className="!rounded-2xl w-screen lg:w-[500px]">
            <div className="relative flex flex-col justify-center items-center">
                <div className="absolute -top-11 landing-popup-header rounded-[33px] py-2 px-8">
                    <div className="title uppercase text-red-500">Chính sách bảo mật</div>
                </div>

                <div className="p-2 text-sm max-h-[80vh] overflow-y-auto scrollbar-none">

                    <p className="my-1 text-lg font-semibold">1. Giới thiệu</p>

                    <p>
                        Chào mừng bạn đến với MB66VI Công Ty TNHH Truyền Thông Giải Trí MB66VN.
                        Chúng tôi cam kết bảo vệ quyền riêng tư và bảo mật thông tin của khách hàng.
                        Trang này mô tả các chính sách và biện pháp mà chúng tôi áp dụng để đảm bảo an toàn và bảo mật cho dữ liệu của bạn.
                    </p>

                    <p className="my-1 text-lg font-semibold">2. Thu thập thông tin</p>

                    <p>
                        Chúng tôi thu thập thông tin cá nhân của bạn khi bạn sử dụng dịch vụ của chúng tôi. Các loại thông tin bao gồm:
                    </p>

                    <p>
                        <p>Thông tin cá nhân: Tên, địa chỉ email, số điện thoại, và các thông tin liên hệ khác.</p>
                        <p>Thông tin kỹ thuật: Địa chỉ IP, loại trình duyệt, thời gian truy cập và các dữ liệu tương tác khác với website của chúng tôi.</p>
                        <p>Thông tin giao dịch: Lịch sử mua hàng, dịch vụ đã sử dụng, và các thông tin tài chính liên quan.</p>
                    </p>

                    <p className="my-1 text-lg font-semibold">3. Sử dụng thông tin</p>

                    <p>
                        Thông tin cá nhân của bạn được sử dụng cho các mục đích sau:
                    </p>

                    <p>
                        <p>Cung cấp dịch vụ: Để thực hiện và quản lý các dịch vụ bạn yêu cầu.</p>
                        <p>Cải thiện dịch vụ: Để nâng cao chất lượng dịch vụ và trải nghiệm người dùng.</p>
                        <p>Liên lạc: Để gửi thông báo, bản tin, và các thông tin quan trọng liên quan đến dịch vụ.</p>
                        <p>Bảo mật: Để phát hiện và ngăn chặn các hoạt động gian lận, bảo vệ an ninh cho hệ thống và dữ liệu của bạn.</p>
                    </p>

                    <p className="my-1 text-lg font-semibold">4. Chia sẻ thông tin</p>

                    <p>
                        Chúng tôi không bán, trao đổi, hoặc cho thuê thông tin cá nhân của bạn cho bên thứ ba.
                        Tuy nhiên, chúng tôi có thể chia sẻ thông tin của bạn với các bên thứ ba đáng tin cậy trong các trường hợp sau:
                        <p>Đối tác dịch vụ: Các đối tác hỗ trợ chúng tôi trong việc cung cấp dịch vụ, như nhà cung cấp dịch vụ lưu trữ, thanh toán, và phân tích dữ liệu.</p>
                        <p>Yêu cầu pháp lý: Khi có yêu cầu từ cơ quan pháp luật hoặc để tuân thủ các quy định pháp luật hiện hành.</p>
                    </p>

                    <p className="my-1 text-lg font-semibold">5. Bảo mật thông tin</p>

                    <p>
                        Chúng tôi áp dụng các biện pháp bảo mật kỹ thuật và tổ chức để bảo vệ thông tin cá nhân của bạn khỏi mất mát,
                        truy cập trái phép, tiết lộ, thay đổi hoặc phá hủy. Các biện pháp này bao gồm:
                        <p>Mã hóa dữ liệu: Sử dụng giao thức SSL/TLS để mã hóa dữ liệu truyền tải.</p>
                        <p>Quản lý truy cập: Hạn chế quyền truy cập vào thông tin cá nhân chỉ cho những nhân viên cần thiết.</p>
                        <p>Giám sát và đánh giá: Thường xuyên kiểm tra và cải thiện các biện pháp bảo mật.</p>
                    </p>

                    <p className="my-1 text-lg font-semibold">6. Quyền của bạn</p>

                    <p>
                        Bạn có quyền:
                        <p>Truy cập thông tin cá nhân: Yêu cầu xem xét và sao chép thông tin cá nhân mà chúng tôi lưu trữ</p>
                        <p>Chỉnh sửa thông tin: Yêu cầu cập nhật hoặc sửa đổi thông tin cá nhân của bạn.</p>
                        <p>Xóa thông tin: Yêu cầu xóa thông tin cá nhân của bạn khỏi hệ thống của chúng tôi, trừ khi chúng tôi cần giữ lại theo quy định pháp luật.</p>
                    </p>

                    <p className="my-1 text-lg font-semibold">7. Thay đổi chính sách</p>

                    <p>
                        Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian.
                        Mọi thay đổi sẽ được thông báo trên trang web của chúng tôi.
                        Chúng tôi khuyến khích bạn thường xuyên kiểm tra trang này để cập nhật những thay đổi mới nhất.
                    </p>

                    <p className="my-1 text-lg font-semibold">8. Liên hệ</p>
                    <p>Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào liên quan đến chính sách bảo mật, vui lòng liên hệ với chúng tôi:</p>
                    <ul>
                        <li>Email: mkt@mb66vi.com</li>
                        <li>Điện thoại: 0379.534.534</li>
                        <li>Địa chỉ: Thanh Xuân, Hà Nội</li>
                    </ul>
                </div>
            </div>
        </DialogContent>
    </Dialog>
}