# TNS-Test-Angular (v.18)

โครงสร้างโปรเจค ประบกอบด้วย

- Components
    AppComponent: Component หลักของแอปพลิเคชัน Angular ซึ่งใช้เพื่อครอบคลุมพื้นที่ทำงานทั้งหมดของแอปพลิเคชัน
    DepartmentListComponent: Component สำหรับแสดงรายการแผนก
    DepartmentFormComponent: Component สำหรับฟอร์มการจัดการข้อมูลแผนก
    UserListComponent: Component สำหรับแสดงรายการ user
    UsermentFormComponent: Component สำหรับฟอร์มการจัดการข้อมูล user

- Services
    DepartmentService: Service ที่ใช้สำหรับการเชื่อมต่อกับ Backend API เพื่อดึงข้อมูลและทำการอัปเดตข้อมูลของแผนก
    UserService: Service ที่ใช้สำหรับการเชื่อมต่อกับ Backend API เพื่อดึงข้อมูลและทำการอัปเดตข้อมูลของ user

- models
    เพื่อเก็บข้อมูลที่ได้รับมาจาก Backend หรือใช้ในการสื่อสารระหว่าง Component ต่าง ๆ

- Modules
    AppModule: NgModule หลักของแอปพลิเคชัน Angular ซึ่งรวมถึงการนำเข้าทุกอย่างที่จำเป็นสำหรับการทำงานของแอปพลิเคชัน เช่น BrowserModule, HttpClientModule, FormsModule, และ AppRoutingModule

- Routing
    AppRoutingModule: Module ที่ใช้สำหรับกำหนดเส้นทางของแอปพลิเคชัน Angular เพื่อเชื่อมโยงหน้าต่าง ๆ ของแอปพลิเคชันกับ URL ที่เกี่ยวข้อง

- Templates
    Templates หรือ HTML files ที่ใช้สำหรับแสดงผลข้อมูลและฟอร์มต่าง ๆ ในแอปพลิเคชัน

- Styles
    CSS หรือ SCSS files ที่ใช้สำหรับสไตล์และการจัดรูปแบบต่าง ๆ ในแอปพลิเคชัน


