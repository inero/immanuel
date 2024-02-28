import React from "react";
import {
    Grid,
    GridColumn,
    GridRow,
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    CardGroup,
    Image,
    FeedSummary,
    FeedEvent,
    FeedDate,
    FeedContent,
    Feed,
    Icon,
    Container,
    CommentGroup,
    Comment,
    CommentContent,
    CommentAuthor,
    CommentMetadata,
    CommentText,
    CommentActions,
    CommentAction,
    Header,
} from 'semantic-ui-react';
import avatar from '../../assets/images/profile.jpg';

export const Dashboard = () => {
    const experiance = [
        {
          header: 'HCL Tech',
          description: 'Senior Technical Lead',
          meta: 'From 17-Jun-2019 to [till date]',
          details: 'Bangalore'
        },
        {
            header: 'Conduent (Erstwhile Xerox)',
            description: 'Senior Software Engineer',
            meta: 'From 27-Mar-2017 to 14-June-2019',
            details: 'Bangalore'
        },
        {
            header: 'Infinite Computer Solutions',
            description: 'Software Engineer',
            meta: 'From 16-Aug-2016 to 24-Mar-2017',
            details: 'Bangalore'
        },
        {
            header: 'TheValai InfoTech',
            description: 'Software Engineer',
            meta: 'From 07-May-2013 to13-Aug-2016',
            details: 'Bangalore'
        },
      ];
      const education = [
        {
          header: 'MCA',
          description:
            'from June 2010 to April 2013',
          meta: '80%',
          detail: 'Master of Computer Applications'
        },
        {
          header: 'BCA',
          description:
            'from June 2007 to April 2010',
          meta: '71%',
          detail: 'Bachelor of Computer Applications'
        }
      ];
  return (
    <Grid stackable>
        <GridRow>
            <GridColumn mobile={16} tablet={8} computer={6}>
                <Card>
                    <Image src={avatar} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Immanuel Kirubaharan</CardHeader>
                        <CardMeta>
                            <span className='date'>Front-End Software Engineer</span>
                        </CardMeta>
                        <CardDescription>
                            <Container textAlign='justified'>Front End Engineer with 10+ years of experience in analysis, design and development of web based applications. I'm looking forward for a challenging role in the field of software development and express my innovative skills for self and organization growth.</Container>
                        </CardDescription>
                    </CardContent>
                    <CardContent extra textAlign="center">
                        <a>
                            •JavaScript •ReactJs •Angular •AngularJs •Redux •NodeJs •PolymerJs •LitElement •EcmaScript •Semantic-UI •Bootstrap •Ajax •Axios •HTML •CSS •GIT
                        </a>
                    </CardContent>
                </Card>
            </GridColumn>
            <GridColumn mobile={16} tablet={8} computer={5}>
            <CommentGroup threaded>
                    <Header as='h3' dividing>Work Experience</Header>
                    {
                        experiance && experiance.map((exp, index)=>{
                            return (
                                <Comment key={index}>
                                    <CommentContent>
                                        <CommentAuthor as='a'>{exp.header}</CommentAuthor>
                                        <CommentMetadata>
                                            <div>{exp.detail}</div>
                                        </CommentMetadata>
                                        <CommentText>{exp.description}</CommentText>
                                        <CommentActions>
                                            <CommentAction>{exp.meta}</CommentAction>
                                        </CommentActions>
                                    </CommentContent>
                                </Comment>
                            )
                        })
                    }
                </CommentGroup>
            </GridColumn>
            <GridColumn mobile={16} tablet={8} computer={5}>
                <CommentGroup threaded>
                    <Header as='h3' dividing>Education</Header>
                    {
                        education && education.map((edu, index)=>{
                            return (
                                <Comment key={index}>
                                    <CommentContent>
                                        <CommentAuthor as='a'>{edu.header}</CommentAuthor>
                                        <CommentMetadata>
                                            <div>{edu.detail}</div>
                                        </CommentMetadata>
                                        <CommentText>{edu.description}</CommentText>
                                        <CommentActions>
                                            <CommentAction>{edu.meta}</CommentAction>
                                        </CommentActions>
                                    </CommentContent>
                                </Comment>
                            )
                        })
                    }
                </CommentGroup>


                
            </GridColumn>
        </GridRow>
    </Grid>
  );
};