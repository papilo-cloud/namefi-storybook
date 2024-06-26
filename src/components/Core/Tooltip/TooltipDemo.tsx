import React from 'react'
import ToolTips from '.'
import * as Tooltip from '@radix-ui/react-tooltip';
export const TooltipDemo = () => {

  return (
    <Tooltip.Provider>
            <Tooltip.Root >
                <Tooltip.Trigger>
                        <p className='text-white'>Hover to show tooltip</p>
                </Tooltip.Trigger>
                    <Tooltip.Content sideOffset={5} align='start'>
                        <ToolTips.Content.Long>
                            <ToolTips.Image />
                            <ToolTips.Info>
                                <ToolTips.Typography.Title>
                                    AutoPark™️
                                </ToolTips.Typography.Title>
                                <ToolTips.Typography.BodyText>
                                    <p>Your domain is automatically set to <ToolTips.Typography.Span>parking mode</ToolTips.Typography.Span> - for sale.</p>
                                    <p>Visitors can <ToolTips.Typography.Span>buy</ToolTips.Typography.Span> or <ToolTips.Typography.Span>make an offer</ToolTips.Typography.Span> to you.</p>
                                </ToolTips.Typography.BodyText>
                                <ToolTips.Typography.Link href='https://www.w3schools.com/react/react_usecontext.asp'>
                                    Learn More
                                </ToolTips.Typography.Link>
                            </ToolTips.Info>
                        </ToolTips.Content.Long>
                        {/* <ToolTips.Content.Short>
                            <ToolTips.Typography.BodyText>
                                To change type, please delete and add new record
                            </ToolTips.Typography.BodyText>
                        </ToolTips.Content.Short> */}
                    </Tooltip.Content>
            </Tooltip.Root>
    </Tooltip.Provider>
  )
}
