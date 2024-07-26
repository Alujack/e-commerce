import{Img, Button,Text,Input,SelectBox} from "@/components"
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
export default function App(){
    return(<>
     <div className="mt-[30px] flex items-start justify-between gap-5 self-stretch md:flex-col ">
              <div className="flex w-[13%] items-center justify-center md:w-full">
                <h1>{}</h1>
                <img
                  alt="pexels christin"
                  className="h-[136px] w-[130] rounded-[65px] object-cover"
                />
                <Button size="md" className="relative mb-4 ml-[-28px] w-[30px] self-end rounded-[15px]">
                  <Img src="/images/img_group_194.svg" width={30} height={31} />
                </Button>
              </div>
              <div className="flex w-[82%] justify-center gap-[29px] pb-[23px] md:w-full md:flex-col sm:pb-5">
                <div className="flex w-full flex-col gap-[21px]">
                  <div className="flex flex-col items-start gap-2.5">
                    <Text as="p">Your Name</Text>
                    <Input shape="round" name="Group 195" placeholder={`Charlene Reed `} className="sm:pr-5" />
                  </div>
                  <div className="flex flex-col items-start gap-2.5">
                    <Text as="p">Email</Text>
                    <Input shape="round" name="Group 195" placeholder={`charlenereed@gmail.com `} className="sm:pr-5" />
                  </div>
                  <div className="flex flex-col items-start gap-2.5">
                    <Text as="p">Date of Birth</Text>
                    <SelectBox
                      shape="round"
                      indicator={
                        <Img
                          src="/images/img_arrowdown.svg"
                          width={12}
                          height={6}
                          alt="arrow_down"
                          className="h-[6px] w-[12px]"
                        />
                      }
                      name="25 January 1990"
                      placeholder={`25 January 1990`}
                      options={dropDownOptions}
                      className="gap-px self-stretch border border-solid border-teal-50 sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2.5">
                    <Text as="p">Permanent Address</Text>
                    <Input
                      shape="round"
                      name="Group 195"
                      placeholder={`San Jose, California, USA`}
                      className="sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2.5">
                    <Text as="p">Postal Code</Text>
                    <Input shape="round" name="Group 195" placeholder={`45962`} className="sm:pr-5" />
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[22px]">
                  <div className="flex flex-col gap-[21px]">
                    <div className="flex flex-col items-start gap-2.5">
                      <Text as="p">Store Name</Text>
                      <Input shape="round" name="Group 195" placeholder={`Charlene Reed `} className="sm:pr-5" />
                    </div>
                    <div className="flex flex-col items-start gap-2.5">
                      <Text as="p">Password</Text>
                      <Input
                        shape="round"
                        type="password"
                        name="Group 195"
                        placeholder={`**********`}
                        className="sm:pr-5"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-2.5">
                      <Text as="p">Present Address</Text>
                      <Input
                        shape="round"
                        name="Group 195"
                        placeholder={`San Jose, California, USA`}
                        className="sm:pr-5"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-[9px]">
                      <Text as="p">City</Text>
                      <Input shape="round" name="Group 195" placeholder={`San Jose`} className="sm:pr-5" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[9px]">
                    <Text as="p">Country</Text>
                    <Input shape="round" name="Group 195" placeholder={`USA`} className="sm:pr-5" />
                  </div>
                </div>
              </div>
     </div>
    <Button className=" self-center min-w-[190px] rounded-[15px] font-medium sm:px-5">Save</Button>
    </>)
}