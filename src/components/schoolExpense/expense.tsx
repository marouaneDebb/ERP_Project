import React from 'react';
import { IonCol, IonRow} from '@ionic/react';

   interface Expense {
    id:number;
    date:string;
    timing: string;
    sold:number;
    status:string;
  }
  interface showExpenseProps {
    item: Expense;
  }
  
  const showExpense: React.FC<showExpenseProps> = ({item}) => {
    const getColor = (value:string) => {
        if(value ==="Complete"){
            return 'green';
        }
        else if(value==="Canceled"){
            return 'red';
        }
        else return 'grey';
      };

    return(
        <IonRow className='mt-3'>
            <IonCol className='col-2'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="#FF4550"/>
                    <g clip-path="url(#clip0_457_1966)">
                    <path d="M28.5715 15.2383C28.5805 15.1719 28.5805 15.1046 28.5715 15.0383C28.5632 14.9824 28.5472 14.9279 28.5239 14.8764C28.4988 14.8298 28.4701 14.7852 28.4382 14.743C28.402 14.6828 28.357 14.6282 28.3049 14.5811L28.1906 14.5145C28.1356 14.4735 28.0745 14.4413 28.0096 14.4192H27.8192C27.7611 14.363 27.6933 14.3178 27.6192 14.2859H22.8572C22.6047 14.2859 22.3624 14.3862 22.1838 14.5648C22.0052 14.7434 21.9049 14.9857 21.9049 15.2383C21.9049 15.4909 22.0052 15.7331 22.1838 15.9117C22.3624 16.0903 22.6047 16.1907 22.8572 16.1907H25.5525L21.743 20.6764L17.6287 18.2287C17.4338 18.1128 17.204 18.0703 16.9805 18.1087C16.757 18.1471 16.5546 18.264 16.4096 18.4383L11.6477 24.1526C11.5675 24.2488 11.5071 24.3599 11.4699 24.4795C11.4327 24.5991 11.4195 24.7249 11.431 24.8497C11.4425 24.9744 11.4785 25.0957 11.537 25.2065C11.5954 25.3173 11.6751 25.4155 11.7715 25.4954C11.9429 25.6374 12.1585 25.7149 12.3811 25.7145C12.521 25.7147 12.6592 25.6841 12.786 25.6248C12.9127 25.5656 13.0248 25.4791 13.1144 25.3716L17.3525 20.2859L21.4192 22.724C21.612 22.8384 21.8391 22.8811 22.0604 22.8445C22.2816 22.8079 22.4829 22.6944 22.6287 22.524L26.6668 17.8097V20.0002C26.6668 20.2528 26.7671 20.495 26.9457 20.6736C27.1243 20.8522 27.3666 20.9526 27.6192 20.9526C27.8717 20.9526 28.114 20.8522 28.2926 20.6736C28.4712 20.495 28.5715 20.2528 28.5715 20.0002V15.2383Z" fill="#FCFCFC"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_457_1966">
                    <rect width="22.8571" height="22.8571" fill="white" transform="translate(8.57153 8.57153)"/>
                    </clipPath>
                    </defs>
                </svg>
            </IonCol>
            <IonCol className='col-5'>
                <IonRow>#{item.id}</IonRow>
                <IonRow className='subTitle'>{item.date}  |{item.timing}</IonRow>
            </IonCol>
            <IonCol className='col-3'>$ {item.sold}</IonCol>
            <IonCol className='subTitle col-2' style={{ color: getColor(item.status) }}>{item.status}</IonCol>

        </IonRow>
)};
export default showExpense;