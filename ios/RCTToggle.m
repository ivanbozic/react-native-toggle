#import "RCTViewManager.h"
#import "RCTBridge.h"
#import "RCTView.h"

@interface RCTToggleManager : RCTViewManager
@end


@implementation RCTToggleManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(hidden, BOOL)

-(UIView *)view {
    return [[RCTView alloc] init];
}

@end