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
    Icon
} from 'semantic-ui-react';
import avatar from '../../assets/images/profile.jpg';

export const Dashboard = () => {
    const items = [
        {
          header: 'MCA (Master of Computer Applications)',
          description:
            'from June 2010 to April 2013',
          meta: '80%',
        },
        {
          header: 'BCA (Bachelor of Computer Applications)',
          description:
            'from June 2007 to April 2010',
          meta: '71%',
        },
        {
          header: 'Infinite Computer Solutions',
          description:
            'from April 2005 to Aug 2006',
          meta: '56%',
        },
        {
            header: '10th Standard',
            description:
              'from April 2003 to Aug 2004',
            meta: '78%',
        }
      ];

  return (
    <Grid>
        <GridRow>
            <GridColumn width={4}>
                <Card>
                    <Image src={avatar} wrapped ui={false} />
                    <CardContent>
                        <CardHeader>Immanuel Kirubaharan</CardHeader>
                        <CardMeta>
                            <span className='date'>Front-End Software Engineer</span>
                        </CardMeta>
                        <CardDescription>
                            I'm a Front-end Software Engineer working in Bangalore, having 10+ years of experience in developing software applications across many domains.
                        </CardDescription>
                    </CardContent>
                    <CardContent extra textAlign="center">
                        <a>
                            JavaScript | ReactJs | Angular | AngularJs | Redux | NodeJs | Polymer | EcmaScript | Semantic-UI | Bootstrap | HTML | CSS | GIT
                        </a>
                    </CardContent>
                </Card>
            </GridColumn>
            <GridColumn width={4}>
                <Card>
                    <CardContent>
                        <CardHeader>Experience</CardHeader>
                    </CardContent>
                    <CardContent>
                    <Feed>
                        <FeedEvent>
                            <Icon size='large' name='user' />
                            <FeedContent>
                                <FeedDate content='Senior Technical Lead' />
                                <FeedSummary>
                                at <a>HCL Tech</a> from July 2019 to [till date]
                                </FeedSummary>
                            </FeedContent>
                        </FeedEvent>
                        <br/>
                        <FeedEvent>
                            <Icon size='large' name='user' />
                            <FeedContent>
                                <FeedDate content='Senior Software Engineer' />
                                <FeedSummary>
                                at <a>Conduent</a> from Aug 2018 to July 2019
                                </FeedSummary>
                            </FeedContent>
                        </FeedEvent>
                        <br/>
                        <FeedEvent>
                            <Icon size='large' name='user' />
                            <FeedContent>
                                <FeedDate content='Software Enginner' />
                                <FeedSummary>
                                at <a>Infinite Computer Solutions</a> from April 2017 to Aug 2018
                                </FeedSummary>
                            </FeedContent>
                        </FeedEvent>
                        <br/>
                        <FeedEvent>
                            <Icon size='large' name='user' />
                            <FeedContent>
                                <FeedDate content='Software Engineer' />
                                <FeedSummary>
                                at <a>TheValai InfoTech</a> from April 2013 to Aug 2017
                                </FeedSummary>
                            </FeedContent>
                        </FeedEvent>
                    </Feed>
                    </CardContent>
                </Card>
            </GridColumn>
            <GridColumn width={4}>
                <CardGroup stackable itemsPerRow={1} items={items} />
            </GridColumn>
            <GridColumn width={4}>

            </GridColumn>
        </GridRow>
    </Grid>
  );
};