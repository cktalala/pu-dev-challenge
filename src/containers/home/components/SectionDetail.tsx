import Image from "next/image";
import React from "react";
import Footer from "./Footer";
import { Item, Stagger } from "@/components/text-animation";

const SectionDetail = () => {
  return (
    <>
      <section
        data-section
        className="font-sans flex bg-black px-10 md:px-0"
      >
        <div className="flex flex-col mt-24 max-w-[720px] mx-auto  gap-16 w-full">
          <h1 className="typo-h1 text-white font-noto-sans-thai text-center md:text-left">
            ความเห็นนักวิชาการ
          </h1>
          <Stagger>
            {/* person 1 */}
            <Item>
              <div className="w-full flex flex-col">
                <div className="flex flex-col gap-8 max-w-[480px]">
                  <p className="typo-body1 text-white font-mono text-center md:text-left">
                    “ปัญหาใหญ่มากๆ ของมาตรา 112
                    คือมันมีนโยบายที่ให้ใช้อย่างร้ายแรงที่สุด ให้เป็นความลับ
                    มันทำให้ภาพลักษณ์ของระบบยุติธรรมในคดี 112
                    เป็นกฎหมายที่ไม่ชัดเจนแน่นอน กฎหมายไม่มีความโปร่งใส
                    และไม่สมเหตุสมผล ไม่ว่าต่อไปนี้คุณจะตัดสินคดีอื่น
                    คดีไหนก็ตาม คนก็จะเกิดความไม่เชื่อถือ
                    เกิดความสงสัยในการกระทำของสถาบันตุลาการ
                    ถ้าเป็นอย่างนั้นสังคมไทยอยู่ไม่ได้”
                  </p>
                  <div className="flex items-center gap-4 flex-col md:flex-row">
                    <Image
                      src="/images/person-1.png"
                      alt="detail-1"
                      width={86}
                      height={86}
                    />
                    <div>
                      <p className="typo-body2 text-white font-mono font-bold text-center md:text-left">
                        ดร. เข็มทอง ต้นสกุลรุ่งเรือง
                      </p>
                      <p className="typo-body2 text-white font-mono text-center md:text-left">
                        คณะนิติศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Item>

            {/* person 2 */}
            <Item>
              <div className="w-full flex flex-col items-end">
                <div className="flex flex-col gap-8 max-w-[480px]">
                  <p className="typo-body1 text-white font-mono text-center md:text-right">
                    “เราสามารถมีระบอบประชาธิปไตยอันมีพระมหากษัตริย์ทรงเป็นประมุขได้
                    แต่เราก็สามารถทำให้กฏหมายนั้น มันไม่ขัดแย้งต่อหลักการพื้นฐาน
                    สิทธิ และเสรีภาพของประชาชนในสังคมประชาธิปไตยได้
                    และนั่นก็ควรเป็นสิ่งที่ควรจะทำ”
                  </p>
                  <div className="flex items-center gap-4 justify-end flex-col md:flex-row">
                    <div>
                      <p className="typo-body2 text-white font-mono font-bold text-center md:text-right">
                        รองศาสตราจารย์ ดร. วาสนา วงศ์สุรวัฒน์
                      </p>
                      <p className="typo-body2 text-white font-mono text-center md:text-right ">
                        คณะอักษรศาสตร์ ภาควิชาประวัติศาสตร์
                        จุฬาลงกรณ์มหาวิทยาลัย
                      </p>
                    </div>
                    <Image
                      src="/images/person-2.png"
                      alt="detail-2"
                      width={86}
                      height={86}
                      className="md:order-last order-first "
                    />
                  </div>
                </div>
              </div>
            </Item>

            {/* person 3 */}
            <Item>
              <div className="w-full flex flex-col mb-24">
                <div className="flex flex-col gap-8 max-w-[480px]">
                  <p className="typo-body1 text-white font-mono text-center md:text-left">
                    “ควรมีบุคคลหรือองค์กรในระดับสูง
                    ซึ่งไม่เกี่ยวกับพระมหากษัตริย์โดยทางหนึ่งทางใด
                    อาจเป็นองค์กรที่มีอยู่แล้วเช่น อัยการสูงสุด
                    รัฐมนตรีกระทรวงวัฒนธรรม นายกรัฐมนตรี
                    หรือตั้งองค์กรใหม่ขึ้นกลั่นกรองก่อนจะอนุมัติให้ดำเนินคดีได้
                    อย่าปล่อยให้ใครๆ ก็สามารถตั้งตัวเป็นโจทย์ฟ้องร้องได้
                    และปล่อยให้ตำรวจชั้นผู้น้อยและอัยการชั้นผู้น้อย
                    ต้องใช้วินิจฉัยของตนเองว่าจะดำเนินคดีหรือไม่
                    ซึ่งยากที่จะใช้อำนาจวินิจฉัยนั้นอย่างเที่ยงธรรม”
                  </p>
                  <div className="flex items-center gap-4 flex-col md:flex-row">
                    <Image
                      src="/images/person-3.png"
                      alt="detail-3"
                      width={86}
                      height={86}
                    />
                    <div>
                      <p className="typo-body2 text-white font-mono font-bold text-center md:text-left">
                        นิธิ เอียวศรีวงศ์
                      </p>
                      <p className="typo-body2 text-white font-mono text-center md:text-left">
                        อดีตอาจารย์ประจำภาควิชาประวัติศาสตร์ คณะมนุษยศาสตร์
                        มหาวิทยาลัยเชียงใหม่
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Item>
          </Stagger>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SectionDetail;
