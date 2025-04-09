# GAME
//Program to find the first of Non Terminal.
#include<stdio.h>
#include<ctype.h>
void FIRST(char[],char );
void resultSet(char[],char);
int nop;
char proSet[10][10];
void main()
{
 int i;
 char choice;
 char c;
 char result[20];
 printf("Enter the Number of Production in Grammar ::");
 scanf(" %d",&nop);
 printf("\nEnter productions in form of S=A+B and for Epsilon A=$ \n");
 for(i=0;i<nop;i++)
 {
 printf("Enter productions Number %d : ",i+1);
 scanf(" %s",proSet[i]);
 }
 do
 {
 printf("\n Find the FIRST of :");
 scanf(" %c",&c);
 FIRST(result,c); 
 printf("\n FIRST(%c)= { ",c);
 for(i=0;result[i]!='\0';i++)
 printf(" %c ",result[i]); 
 printf("}\n");
 printf("press 'y' to continue : ");
 scanf(" %c",&choice);
 }
 while(choice=='y'||choice =='Y');
}
void FIRST(char* Result,char c)
{
 int i,j,k;
 char subResult[20];
 int foundEpsilon;
 subResult[0]='\0';
 Result[0]='\0';
 if(!(isupper(c)))
 {
 resultSet(Result,c);
 return ;
 }
 for(i=0;i<nop;i++)
 {
 if(proSet[i][0]==c)
 {
if(proSet[i][2]=='$') 
 resultSet(Result,'$');
 else
 {
 j=2;
 while(proSet[i][j]!='\0')
 {
 foundEpsilon=0;
 FIRST(subResult,proSet[i][j]);
 for(k=0;subResult[k]!='\0';k++)
 resultSet(Result,subResult[k]);
 for(k=0;subResult[k]!='\0';k++)
 if(subResult[k]=='$')
 {
 foundEpsilon=1;
 break;
 }
 
 if(!foundEpsilon)
 break;
 j++;
 }
 }
 }
}
 
}
void resultSet(char Result[],char val)

{

 int k;

 for(k=0 ;Result[k]!='\0';k++)

 if(Result[k]==val)

 return;

 Result[k]=val;

 Result[k+1]='\0';

}
