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
