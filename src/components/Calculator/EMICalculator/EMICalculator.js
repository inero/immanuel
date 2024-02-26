import React, { useState } from 'react';
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  FormInput,
  FormGroup,
  FormButton,
  Form,
  Message,
} from 'semantic-ui-react';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEmi] = useState(0);
  const [monthlyPayments, setMonthlyPayments] = useState([]);

  const calculateEmi = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const time = parseFloat(loanTenure) * 12;

    const emiValue = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    setEmi(emiValue.toFixed(2));

    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);

    const amortizationSchedule = [];
    let remainingPrincipal = principal;

    for (let month = 1; month <= time; month++) {
      const interestPayment = remainingPrincipal * rate;
      const principalPayment = emi - interestPayment;
      remainingPrincipal -= principalPayment;

      amortizationSchedule.push({
        month,
        principalPayment: principalPayment.toFixed(2),
        interestPayment: interestPayment.toFixed(2),
        remainingPrincipal: remainingPrincipal.toFixed(2),
      });
    }

    setMonthlyPayments(amortizationSchedule);
  };

  return (
    <>
        <Form success>
            <FormGroup widths='equal'>
                <FormInput fluid type='number' label='Loan Amount' value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} placeholder='Loan Amount' />
                <FormInput fluid label='Interest Rate' type='number' value={interestRate} onChange={(e) => setInterestRate(e.target.value)} placeholder='Interest Rate' />
                <FormInput fluid label='Loan Tenure' type='number' value={loanTenure} onChange={(e) => setLoanTenure(e.target.value)} placeholder='Loan Tenure' />
            </FormGroup>
            <FormButton onClick={calculateEmi}>Calculate EMI</FormButton>
            {
                emi > 0 && <Message icon='rupee sign' success header={`Your calculated Monthly EMI Amount is: ₹${emi}`} content='' />
            }
        </Form>
        {
            monthlyPayments.length > 0 && (
                <Table compact size='large'>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell>Month</TableHeaderCell>
                            <TableHeaderCell textAlign='right'>Principal</TableHeaderCell>
                            <TableHeaderCell textAlign='right'>Interest</TableHeaderCell>
                            <TableHeaderCell textAlign='right'>Outstanding</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            monthlyPayments.map((payment) => (
                                <TableRow key={payment.month}>
                                    <TableCell>{payment.month}</TableCell>
                                    <TableCell textAlign='right'>{payment.principalPayment}</TableCell>
                                    <TableCell textAlign='right'>{payment.interestPayment}</TableCell>
                                    <TableCell textAlign='right'>{payment.remainingPrincipal}</TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </Table>
            )
        }
    </>
  );
}

export default EMICalculator;