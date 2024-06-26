import { Button, SelectBox, Img, Heading, Input } from "@/components";

const dropDownOptions = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Do not show", value: "No" },
];

export default function Favorite(){
    return <>
    <div className="flex h-[100%] items-start  md:h-auto md:flex-col">

         <div className="flex flex-1 flex-col items-center gap-[37px] md:self-stretch md:p-5">
                <Heading size="2xl" as="h2" className="ml-[30px] self-start tracking-[-0.11px] md:ml-0">
                Add New Contact
              </Heading>
              <div className="flex w-[95%] items-center justify-center rounded-[14px] border border-solid border-blue_gray-800_03   px-14 py-[60px] md:w-full md:p-5">
                <div className="flex w-[76%] flex-col items-center md:w-full">
                  <Button size="lg" shape="square" className="w-[80px]">
                    <Img src="/images/img_camera.svg" />
                  </Button>
                  <Heading as="h1" className="mt-[15px] tracking-[0.54px] !text-blue-A200_09">
                    Upload Photo
                  </Heading>
                  <div className="mt-[35px] flex justify-between gap-5 self-stretch md:flex-col">
                    <div className="flex w-[46%] flex-col items-start gap-2.5 md:w-full">
                      <Heading as="h2">First Name</Heading>
                      <Input
                        shape="round"
                        type="text"
                        name="firstName"
                        placeholder={`Enter your first name`}
                        className="self-stretch border border-solid border-blue_gray-100_1d_01 sm:pr-5"
                      />
                    </div>
                    <div className="flex w-[46%] flex-col items-start gap-2.5 md:w-full">
                      <Heading as="h3">Last Name</Heading>
                      <Input
                        shape="round"
                        type="text"
                        name="lastName"
                        placeholder={`Enter your last name`}
                        className="self-stretch border border-solid border-blue_gray-100_1d_01 sm:pr-5"
                      />
                    </div>
                  </div>
                  <div className="mt-[59px] flex justify-between gap-5 self-stretch md:flex-col">
                    <div className="flex w-[46%] flex-col items-start gap-2.5 md:w-full">
                      <Heading as="h2">Your email</Heading>
                      <Input
                        shape="round"
                        type="email"
                        name="email"
                        placeholder={`Enter your email`}
                        className="self-stretch border border-solid border-blue_gray-100_1d_01 sm:pr-5"
                      />
                    </div>
                    <div className="flex w-[46%] flex-col items-start gap-2.5 md:w-full">
                      <Heading as="h3">Phone Number</Heading>
                      <Input
                        shape="round"
                        type="number"
                        name="phoneNumber"
                        placeholder={`Enter your phone number`}
                        className="self-stretch border border-solid border-blue_gray-100_1d_01 sm:pr-5"
                      />
                    </div>
                  </div>
                  <div className="mt-[49px] flex w-[77%] justify-between gap-5 self-start md:w-full sm:flex-col">
                    <div className="flex w-[60%] flex-col items-start gap-2.5 sm:w-full">
                      <Heading as="h2">Date of Birth</Heading>
                      <Input
                        shape="round"
                        name="dateOfBirth"
                        placeholder={`Enter your birthdate`}
                        className="self-stretch border border-solid border-blue_gray-100_1d_01 sm:pr-5"
                      />
                    </div>
                    <div className="flex w-[30%] flex-col items-start gap-2.5 sm:w-full">
                      <Heading as="h3">Gender</Heading>
                      <SelectBox
                        size="md"
                        shape="round"
                        indicator={<Img src="/images/img_arrowdown_gray_400.svg" alt="arrow_down" className="h-[7px] w-[12px]" />}
                        name="gender"
                        placeholder={`Male`}
                        options={dropDownOptions}
                        className="gap-px self-stretch border border-solid border-blue_gray-100_1d_01 sm:pr-5"
                      />
                    </div>
                  </div>
                  <Button shape="round" className="mt-[60px] min-w-[274px] font-bold tracking-[-0.06px] bg-[#33CCFF] sm:px-5">
                    Add Now
                  </Button>
            </div>
          </div>
    </div>
     </div>
    </>
}