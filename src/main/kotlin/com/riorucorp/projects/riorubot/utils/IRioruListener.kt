package com.riorucorp.projects.riorubot.utils

import org.javacord.api.DiscordApi
import org.javacord.api.event.audio.AudioSourceFinishedEvent
import org.javacord.api.event.channel.server.*
import org.javacord.api.event.channel.server.invite.ServerChannelInviteCreateEvent
import org.javacord.api.event.channel.server.invite.ServerChannelInviteDeleteEvent
import org.javacord.api.event.channel.server.text.ServerTextChannelChangeSlowmodeEvent
import org.javacord.api.event.channel.server.text.ServerTextChannelChangeTopicEvent
import org.javacord.api.event.channel.server.text.WebhooksUpdateEvent
import org.javacord.api.event.channel.server.voice.*
import org.javacord.api.event.channel.user.PrivateChannelCreateEvent
import org.javacord.api.event.channel.user.PrivateChannelDeleteEvent
import org.javacord.api.event.command.InteractionCreateEvent
import org.javacord.api.event.connection.LostConnectionEvent
import org.javacord.api.event.connection.ReconnectEvent
import org.javacord.api.event.connection.ResumeEvent
import org.javacord.api.event.message.*
import org.javacord.api.event.message.reaction.ReactionAddEvent
import org.javacord.api.event.message.reaction.ReactionRemoveAllEvent
import org.javacord.api.event.message.reaction.ReactionRemoveEvent
import org.javacord.api.event.server.*
import org.javacord.api.event.server.emoji.KnownCustomEmojiChangeNameEvent
import org.javacord.api.event.server.emoji.KnownCustomEmojiChangeWhitelistedRolesEvent
import org.javacord.api.event.server.emoji.KnownCustomEmojiCreateEvent
import org.javacord.api.event.server.emoji.KnownCustomEmojiDeleteEvent
import org.javacord.api.event.server.member.ServerMemberBanEvent
import org.javacord.api.event.server.member.ServerMemberJoinEvent
import org.javacord.api.event.server.member.ServerMemberLeaveEvent
import org.javacord.api.event.server.member.ServerMemberUnbanEvent
import org.javacord.api.event.server.role.*
import org.javacord.api.event.user.*
import org.javacord.api.listener.audio.AudioConnectionAttachableListener
import org.javacord.api.listener.audio.AudioSourceAttachableListener
import org.javacord.api.listener.audio.AudioSourceFinishedListener
import org.javacord.api.listener.channel.ChannelAttachableListener
import org.javacord.api.listener.channel.TextChannelAttachableListener
import org.javacord.api.listener.channel.VoiceChannelAttachableListener
import org.javacord.api.listener.channel.server.*
import org.javacord.api.listener.channel.server.invite.ServerChannelInviteCreateListener
import org.javacord.api.listener.channel.server.invite.ServerChannelInviteDeleteListener
import org.javacord.api.listener.channel.server.text.ServerTextChannelAttachableListener
import org.javacord.api.listener.channel.server.text.ServerTextChannelChangeSlowmodeListener
import org.javacord.api.listener.channel.server.text.ServerTextChannelChangeTopicListener
import org.javacord.api.listener.channel.server.text.WebhooksUpdateListener
import org.javacord.api.listener.channel.server.voice.*
import org.javacord.api.listener.channel.user.PrivateChannelAttachableListener
import org.javacord.api.listener.channel.user.PrivateChannelCreateListener
import org.javacord.api.listener.channel.user.PrivateChannelDeleteListener
import org.javacord.api.listener.command.InteractionCreateListener
import org.javacord.api.listener.connection.LostConnectionListener
import org.javacord.api.listener.connection.ReconnectListener
import org.javacord.api.listener.connection.ResumeListener
import org.javacord.api.listener.message.*
import org.javacord.api.listener.message.reaction.ReactionAddListener
import org.javacord.api.listener.message.reaction.ReactionRemoveAllListener
import org.javacord.api.listener.message.reaction.ReactionRemoveListener
import org.javacord.api.listener.server.*
import org.javacord.api.listener.server.emoji.*
import org.javacord.api.listener.server.member.ServerMemberBanListener
import org.javacord.api.listener.server.member.ServerMemberJoinListener
import org.javacord.api.listener.server.member.ServerMemberLeaveListener
import org.javacord.api.listener.server.member.ServerMemberUnbanListener
import org.javacord.api.listener.server.role.*
import org.javacord.api.listener.user.*
import org.javacord.api.listener.webhook.WebhookAttachableListener

interface IRioruListener :
/* Audio */
    AudioConnectionAttachableListener,
    AudioSourceAttachableListener,
    AudioSourceFinishedListener,
    /* Channel Attachable */
    ChannelAttachableListener,
    TextChannelAttachableListener,
    VoiceChannelAttachableListener,
    /* Private Channel(USER DM) */
    PrivateChannelAttachableListener,
    PrivateChannelCreateListener,
    PrivateChannelDeleteListener,
    /* Server */
    ChannelCategoryAttachableListener,
    ServerChannelAttachableListener,
    ServerChannelChangeNameListener,
    ServerChannelChangeNsfwFlagListener,
    ServerChannelChangeOverwrittenPermissionsListener,
    ServerChannelCreateListener,
    ServerChannelDeleteListener,
    /* Invite */
    ServerChannelInviteCreateListener,
    ServerChannelInviteDeleteListener,
    /* Text */
    ServerTextChannelAttachableListener,
    ServerTextChannelChangeSlowmodeListener,
    ServerTextChannelChangeTopicListener,
    WebhooksUpdateListener,
    /* Voice */
    ServerStageVoiceChannelAttachableListener,
    ServerStageVoiceChannelChangeTopicListener,
    ServerVoiceChannelAttachableListener,
    ServerVoiceChannelChangeBitrateListener,
    ServerVoiceChannelChangeUserLimitListener,
    ServerVoiceChannelMemberJoinListener,
    ServerVoiceChannelMemberLeaveListener,
    /* Commands */
    InteractionCreateListener,
    /* Connection */
    LostConnectionListener,
    ReconnectListener,
    ResumeListener,
    /* Message */
    CachedMessagePinListener,
    CachedMessageUnpinListener,
    ChannelPinsUpdateListener,
    MessageAttachableListener,
    MessageCreateListener,
    MessageDeleteListener,
    MessageEditListener,
    /* Reaction */
    ReactionAddListener,
    ReactionRemoveAllListener,
    ReactionRemoveListener,
    /* Server Change */
    ServerAttachableListener,
    ServerBecomesAvailableListener,
    ServerBecomesUnavailableListener,
    ServerChangeAfkChannelListener,
    ServerChangeAfkTimeoutListener,
    ServerChangeBoostCountListener,
    ServerChangeBoostLevelListener,
    ServerChangeDefaultMessageNotificationLevelListener,
    ServerChangeDescriptionListener,
    ServerChangeDiscoverySplashListener,
    ServerChangeExplicitContentFilterLevelListener,
    ServerChangeIconListener,
    ServerChangeModeratorsOnlyChannelListener,
    ServerChangeMultiFactorAuthenticationLevelListener,
    ServerChangeNameListener,
    ServerChangeOwnerListener,
    ServerChangePreferredLocaleListener,
    ServerChangeRegionListener,
    ServerChangeRulesChannelListener,
    ServerChangeServerFeatureListener,
    ServerChangeSplashListener,
    ServerChangeSystemChannelListener,
    ServerChangeVanityUrlCodeListener,
    ServerChangeVerificationLevelListener,
    ServerJoinListener,
    ServerLeaveListener,
    VoiceServerUpdateListener,
    VoiceStateUpdateListener,
    /* Server Member */
    ServerMemberBanListener,
    ServerMemberJoinListener,
    ServerMemberLeaveListener,
    ServerMemberUnbanListener,
    /* Role */
    RoleAttachableListener,
    RoleChangeColorListener,
    RoleChangeHoistListener,
    RoleChangeMentionableListener,
    RoleChangeNameListener,
    RoleChangePermissionsListener,
    RoleChangePositionListener,
    RoleCreateListener,
    RoleDeleteListener,
    UserRoleAddListener,
    /* Emoji */
    KnownCustomEmojiAttachableListener,
    KnownCustomEmojiChangeNameListener,
    KnownCustomEmojiChangeWhitelistedRolesListener,
    KnownCustomEmojiCreateListener,
    KnownCustomEmojiDeleteListener,
    /* User */
    UserAttachableListener,
    UserChangeActivityListener,
    UserChangeAvatarListener,
    UserChangeDeafenedListener,
    UserChangeDiscriminatorListener,
    UserChangeMutedListener,
    UserChangeNameListener,
    UserChangeNicknameListener,
    UserChangeSelfDeafenedListener,
    UserChangeSelfMutedListener,
    UserChangeStatusListener,
    UserStartTypingListener,
    /* Webhook */
    WebhookAttachableListener {
    override fun onAudioSourceFinished(event: AudioSourceFinishedEvent?) {}
    override fun onPrivateChannelCreate(event: PrivateChannelCreateEvent?) {}
    override fun onPrivateChannelDelete(event: PrivateChannelDeleteEvent?) {}
    override fun onServerChannelChangeName(event: ServerChannelChangeNameEvent?) {}
    override fun onServerChannelChangeNsfwFlag(event: ServerChannelChangeNsfwFlagEvent?) {}
    override fun onServerChannelChangeOverwrittenPermissions(event: ServerChannelChangeOverwrittenPermissionsEvent?) {}
    override fun onServerChannelCreate(event: ServerChannelCreateEvent?) {}
    override fun onServerChannelDelete(event: ServerChannelDeleteEvent?) {}
    override fun onServerChannelInviteCreate(event: ServerChannelInviteCreateEvent?) {}
    override fun onServerChannelInviteDelete(event: ServerChannelInviteDeleteEvent?) {}
    override fun onServerTextChannelChangeSlowmodeDelay(event: ServerTextChannelChangeSlowmodeEvent?) {}
    override fun onServerTextChannelChangeTopic(event: ServerTextChannelChangeTopicEvent?) {}
    override fun onWebhooksUpdate(event: WebhooksUpdateEvent?) {}
    override fun onRoleChangeName(event: RoleChangeNameEvent?) {}
    override fun onMessageCreate(event: MessageCreateEvent?) {}
    override fun onMessageEdit(event: MessageEditEvent?) {}
    override fun onMessageDelete(event: MessageDeleteEvent?) {}
    override fun onInteractionCreate(event: InteractionCreateEvent?) {}
    override fun onServerMemberJoin(event: ServerMemberJoinEvent?) {}
    override fun onServerMemberLeave(event: ServerMemberLeaveEvent?) {}
    override fun onServerMemberBan(event: ServerMemberBanEvent?) {}
    override fun onServerMemberUnban(event: ServerMemberUnbanEvent?) {}
    override fun onServerStageVoiceChannelChangeTopic(event: ServerStageVoiceChannelChangeTopicEvent?) {}
    override fun onServerVoiceChannelChangeBitrate(event: ServerVoiceChannelChangeBitrateEvent?) {}
    override fun onServerVoiceChannelChangeUserLimit(event: ServerVoiceChannelChangeUserLimitEvent?) {}
    override fun onServerVoiceChannelMemberJoin(event: ServerVoiceChannelMemberJoinEvent?) {}
    override fun onServerVoiceChannelMemberLeave(event: ServerVoiceChannelMemberLeaveEvent?) {}
    override fun onLostConnection(event: LostConnectionEvent?) {}
    override fun onReconnect(event: ReconnectEvent?) {}
    override fun onResume(event: ResumeEvent?) {}
    override fun onCachedMessagePin(event: CachedMessagePinEvent?) {}
    override fun onCachedMessageUnpin(event: CachedMessageUnpinEvent?) {}
    override fun onChannelPinsUpdate(event: ChannelPinsUpdateEvent?) {}
    override fun onReactionAdd(event: ReactionAddEvent?) {}
    override fun onReactionRemoveAll(event: ReactionRemoveAllEvent?) {}
    override fun onReactionRemove(event: ReactionRemoveEvent?) {}
    override fun onServerBecomesAvailable(event: ServerBecomesAvailableEvent?) {}
    override fun onServerBecomesUnavailable(event: ServerBecomesUnavailableEvent?) {}
    override fun onServerChangeAfkChannel(event: ServerChangeAfkChannelEvent?) {}
    override fun onServerChangeAfkTimeout(event: ServerChangeAfkTimeoutEvent?) {}
    override fun onServerChangeBoostCount(event: ServerChangeBoostCountEvent?) {}
    override fun onServerChangeBoostLevel(event: ServerChangeBoostLevelEvent?) {}
    override fun onServerChangeDefaultMessageNotificationLevel(event: ServerChangeDefaultMessageNotificationLevelEvent?) {}
    override fun onServerChangeDescription(event: ServerChangeDescriptionEvent?) {}
    override fun onServerChangeDiscoverySplash(event: ServerChangeDiscoverySplashEvent?) {}
    override fun onServerChangeExplicitContentFilterLevel(event: ServerChangeExplicitContentFilterLevelEvent?) {}
    override fun onServerChangeIcon(event: ServerChangeIconEvent?) {}
    override fun onServerChangeModeratorsOnlyChannel(event: ServerChangeModeratorsOnlyChannelEvent?) {}
    override fun onServerChangeMultiFactorAuthenticationLevel(event: ServerChangeMultiFactorAuthenticationLevelEvent?) {}
    override fun onServerChangeName(event: ServerChangeNameEvent?) {}
    override fun onServerChangeOwner(event: ServerChangeOwnerEvent?) {}
    override fun onServerChangePreferredLocale(event: ServerChangePreferredLocaleEvent?) {}
    override fun onServerChangeRegion(event: ServerChangeRegionEvent?) {}
    override fun onServerChangeRulesChannel(event: ServerChangeRulesChannelEvent?) {}
    override fun onServerChangeServerFeature(event: ServerChangeServerFeaturesEvent?) {}
    override fun onServerChangeSplash(event: ServerChangeSplashEvent?) {}
    override fun onServerChangeSystemChannel(event: ServerChangeSystemChannelEvent?) {}
    override fun onServerChangeVanityUrlCode(event: ServerChangeVanityUrlCodeEvent?) {}
    override fun onServerChangeVerificationLevel(event: ServerChangeVerificationLevelEvent?) {}
    override fun onServerJoin(event: ServerJoinEvent?) {}
    override fun onServerLeave(event: ServerLeaveEvent?) {}
    override fun onVoiceServerUpdate(event: VoiceServerUpdateEvent?) {}
    override fun onVoiceStateUpdate(event: VoiceStateUpdateEvent?) {}
    override fun onRoleChangeColor(event: RoleChangeColorEvent?) {}
    override fun onRoleChangeHoist(event: RoleChangeHoistEvent?) {}
    override fun onRoleChangeMentionable(event: RoleChangeMentionableEvent?) {}
    override fun onRoleChangePermissions(event: RoleChangePermissionsEvent?) {}
    override fun onRoleChangePosition(event: RoleChangePositionEvent?) {}
    override fun onRoleCreate(event: RoleCreateEvent?) {}
    override fun onRoleDelete(event: RoleDeleteEvent?) {}
    override fun onUserRoleAdd(event: UserRoleAddEvent?) {}
    override fun onKnownCustomEmojiChangeName(event: KnownCustomEmojiChangeNameEvent?) {}
    override fun onKnownCustomEmojiChangeWhitelistedRoles(event: KnownCustomEmojiChangeWhitelistedRolesEvent?) {}
    override fun onKnownCustomEmojiCreate(event: KnownCustomEmojiCreateEvent?) {}
    override fun onKnownCustomEmojiDelete(event: KnownCustomEmojiDeleteEvent?) {}
    override fun onUserChangeActivity(event: UserChangeActivityEvent?) {}
    override fun onUserChangeAvatar(event: UserChangeAvatarEvent?) {}
    override fun onUserChangeDeafened(event: UserChangeDeafenedEvent?) {}
    override fun onUserChangeDiscriminator(event: UserChangeDiscriminatorEvent?) {}
    override fun onUserChangeMuted(event: UserChangeMutedEvent?) {}
    override fun onUserChangeName(event: UserChangeNameEvent?) {}
    override fun onUserChangeNickname(event: UserChangeNicknameEvent?) {}
    override fun onUserChangeSelfDeafened(event: UserChangeSelfDeafenedEvent?) {}
    override fun onUserChangeSelfMuted(event: UserChangeSelfMutedEvent?) {}
    override fun onUserChangeStatus(event: UserChangeStatusEvent?) {}
    override fun onUserStartTyping(event: UserStartTypingEvent?) {}
    fun onReady(api: DiscordApi) {}
}