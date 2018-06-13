#import <React/RCTViewManager.h>
#import <React/RCTBridge.h>
#import <React/RCTView.h>

@interface RCTToggleManager : RCTViewManager
@end


@implementation RCTToggleManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(hidden, BOOL)

-(UIView *)view {
    return [[RCTView alloc] init];
}

@end
